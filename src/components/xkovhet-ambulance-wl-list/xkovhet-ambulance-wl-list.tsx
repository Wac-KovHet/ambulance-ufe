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
  doctorTotalWage = 0;
  nurseTotalWage = 0;

  private async getAmbulancesAsync() {
    this.loading = true;

    try {
      const api = AmbulanceListApiFactory(undefined, this.apiBase);
      const response = await api.getAmbulanceList();

      if (response.status < 299) {
        this.ambulances = response.data;
        this.calculateEmployee();
        this.render();
      } else {
        this.errorMessage = `Cannot get ambulances: ${response.statusText}`;
      }
    } catch (error) {
      this.errorMessage = `Cannot get ambulances: ${error.message}`;
    }
  }

  private calculateEmployee() {
    this.numberOfAmbulances = this.ambulances.length;
    this.numberOfDoctors = 0;
    this.numberOfNurses = 0;
    this.numberOfPatients = 0;

    this.ambulances.forEach(ambulance => {
      this.numberOfDoctors += ambulance.doctorCount;
      this.numberOfNurses += ambulance.nurseCount;
      this.doctorTotalWage += ambulance.doctorTotalWage;
      this.nurseTotalWage += ambulance.nurseTotalWage;
    });
  }

  private async deleteAmbulance(ambulanceId: string) {
    try {
      const api = AmbulanceListApiFactory(undefined, this.apiBase);
      const response = await api.deleteAmbulance(ambulanceId);

      if (response.status < 299) {
        console.log('Deleted ambulance');
        this.ambulances = this.ambulances.filter(ambulance => ambulance.id !== ambulanceId);
        this.calculateEmployee();
        this.render();
      } else {
        this.errorMessage = `Cannot delete ambulance: ${response.statusText}`;
      }
    } catch (error) {
      this.errorMessage = `Cannot delete ambulance: ${error.message}`;
    }
  }

  async componentWillLoad() {
    this.getAmbulancesAsync();
    this.loading = false;
  }

  render() {
    return (
      <Host>
        {this.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <div class="card">
              <div class="card-header">General Information</div>
              <div class="card-body">
                <div class="info-container">
                  <div class="info-item">
                    <md-icon>local_hospital</md-icon>
                    <p>Number of Ambulances: {this.numberOfAmbulances}</p>
                  </div>
                  <div class="info-item">
                    <md-icon>person</md-icon>
                    <p class="info-text">
                      Number of Doctors: <span class="info-value">{this.numberOfDoctors}</span>
                    </p>
                    <md-icon>attach_money</md-icon>
                    <p class="info-text">
                      Total Wage: <span class="info-value">{this.doctorTotalWage}</span>
                    </p>
                  </div>
                  <div class="info-item">
                    <md-icon>person</md-icon>
                    <p class="info-text">
                      Number of Nurses: <span class="info-value">{this.numberOfNurses}</span>
                    </p>
                    <md-icon>attach_money</md-icon>
                    <p class="info-text">
                      Total Wage: <span class="info-value">{this.nurseTotalWage}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

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

            <md-filled-button onclick={() => this.entryClicked.emit('@new')}>
              <md-icon class="mt-3" slot="icon">
                add
              </md-icon>
              Add New Ambulance
            </md-filled-button>
          </div>
        )}
      </Host>
    );
  }
}
