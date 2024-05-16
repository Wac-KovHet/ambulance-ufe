import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';

import { AmbulanceListApiFactory } from '../../api/ambulance-wl/api';
import { AmbulanceResponse } from '../../api/ambulance-wl/api';
@Component({
  tag: 'xkovhet-ambulance-wl-list',
  styleUrl: 'xkovhet-ambulance-wl-list.css',
  shadow: true,
})
export class XkovhetAmbulanceWlList {
  @Event({ eventName: 'entry-clicked' }) entryClicked: EventEmitter<string>;
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;
  @State() errorMessage: string;

  @State() ambulances: AmbulanceResponse[] = [];

  loading = true;

  numberOfAmbulances = 0;
  numberOfDoctors = 0;
  numberOfNurses = 0;
  numberOfPatients = 0;

  private async getAmbulancesAsync() {
    this.loading = true;

    try {
      const api = AmbulanceListApiFactory(undefined, this.apiBase);
      const response = await api.getAmbulanceList();

      if (response.status < 299) {
        this.ambulances = response.data;
      } else {
        this.errorMessage = `Cannot get ambulances: ${response.statusText}`;
      }
    } catch (error) {
      this.errorMessage = `Cannot get ambulances: ${error.message}`;
    }
  }

  private async deleteAmbulance(ambulanceId: string) {
    try {
      const api = AmbulanceListApiFactory(undefined, this.apiBase);
      const response = await api.deleteAmbulance(ambulanceId);

      if (response.status < 299) {
        console.log('Deleted ambulance');
      } else {
        this.errorMessage = `Cannot delete ambulance: ${response.statusText}`;
      }
    } catch (error) {
      this.errorMessage = `Cannot delete ambulance: ${error.message}`;
    }
  }

  async componentWillLoad() {
    this.getAmbulancesAsync();
    this.numberOfAmbulances = this.ambulances.length;
    this.numberOfDoctors = this.ambulances.reduce((acc, curr) => acc + curr.doctorCount, 0);
    this.numberOfNurses = this.ambulances.reduce((acc, curr) => acc + curr.nurseCount, 0);
    this.loading = false;
  }

  render() {
    return (
      <Host>
        <div>
          <div class="card">
            <div class="card-header">General Information</div>
            <div class="card-body">
              <div class="info-item">
                <md-icon>local_hospital</md-icon>
                <p>Number of Ambulances: {this.numberOfAmbulances}</p>
              </div>
              <div class="info-item">
                <md-icon>person</md-icon>
                <p>Number of Doctors: {this.numberOfDoctors}</p>
              </div>
              <div class="info-item">
                <md-icon>nurse</md-icon>
                <p>Number of Nurses: {this.numberOfNurses}</p>
              </div>
            </div>
          </div>
          {this.loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {this.errorMessage ? <div class="error">{this.errorMessage}</div> : ''}
              <md-list class="custom-list">
                {this.ambulances.map(ambulance => (
                  <div>
                    <md-list-item>
                      <div slot="headline">{ambulance.name}</div>
                      <div slot="supporting-text">{'Location: ' + ambulance.location}</div>
                      <div slot="supporting-text">{'Doctors: ' + ambulance.doctorCount}</div>
                      <div slot="supporting-text">{'Nurses: ' + ambulance.nurseCount}</div>
                      <md-icon slot="start">emergency</md-icon>

                      <md-filled-icon-button slot="end" class="update-button" onclick={() => this.entryClicked.emit(ambulance.id)}>
                        <md-icon>edit</md-icon>
                      </md-filled-icon-button>
                      <md-filled-icon-button slot="end" class="delete-button" onclick={() => this.deleteAmbulance(ambulance.id)}>
                        {' '}
                        <md-icon>delete</md-icon>
                      </md-filled-icon-button>
                    </md-list-item>
                    <md-divider />
                  </div>
                ))}
              </md-list>
            </div>
          )}
          <md-filled-button onclick={() => this.entryClicked.emit('@new')}>
            <md-icon class="mt-3" slot="icon">
              add
            </md-icon>
            Add New Ambulance
          </md-filled-button>
        </div>
      </Host>
    );
  }
}
