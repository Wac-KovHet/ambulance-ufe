import { Component, Host, Prop, State, h, EventEmitter, Event } from '@stencil/core';

import { AmbulanceListApiFactory, AmbulanceResponse, AmbulanceRequest } from '../../api/ambulance-wl/api';

@Component({
  tag: 'xkovhet-ambulance-wl-editor',
  styleUrl: 'xkovhet-ambulance-wl-editor.css',
  shadow: true,
})
export class XkovhetAmbulanceWlEditor {
  @Prop() ambulanceId: string;

  @Prop() apiBase: string;
  @Event({ eventName: 'editor-closed' }) editorClosed: EventEmitter<string>;
  @Event({ eventName: 'employee-list' }) employeeList: EventEmitter<string>;

  @State() ambulance: AmbulanceResponse;
  @State() ambulanceRequest: AmbulanceRequest;
  private formElement: HTMLFormElement;

  @State() private errorMessage: string = '';
  private handleInputEvent(ev: InputEvent): string {
    const target = ev.target as HTMLInputElement;

    return target.value;
  }
  componentWillLoad() {
    if (this.ambulanceId) {
      this.fetchAmbulanceDetails();
    } else {
      this.ambulance = {
        id: '',
        name: '',
        location: '',
        doctorCount: 0,
        nurseCount: 0,
        contact: '',
      };
    }
  }

  private async fetchAmbulanceDetails() {
    try {
      const api = AmbulanceListApiFactory(undefined, this.apiBase);
      const response = await api.getAmbulance(this.ambulanceId);

      if (response.status === 200) {
        this.ambulance = await response.data;
      }
    } catch (error) {
      this.errorMessage = 'Failed to fetch ambulance details';
    }
  }

  private checkValidity() {
    for (let i = 0; i < this.formElement.children.length; i++) {
      const element = this.formElement.children[i];
      if ('reportValidity' in element) {
        const valid = (element as HTMLInputElement).reportValidity();
        if (!valid) {
          return true;
        }
      }
    }
  }

  private async createAmbulance() {
    const ambulanceRequest: AmbulanceRequest = {
      name: this.ambulance.name,
      location: this.ambulance.location,
      contact: this.ambulance.contact,
    };
    if (this.checkValidity()) {
      return;
    }
    try {
      const api = AmbulanceListApiFactory(undefined, this.apiBase);
      const response = await api.createAmbulance(ambulanceRequest);
      if (response.status === 201) {
        this.editorClosed.emit('create');
      }
    } catch (error) {
      this.errorMessage = 'Failed to create ambulance';
    }
  }

  private async updateAmbulance() {
    if (this.checkValidity()) {
      return;
    }
    const ambulanceRequest: AmbulanceRequest = {
      name: this.ambulance.name,
      location: this.ambulance.location,
      contact: this.ambulance.contact,
    };
    try {
      const api = AmbulanceListApiFactory(undefined, this.apiBase);
      const response = await api.updateAmbulance(this.ambulanceId, ambulanceRequest);

      if (response.status === 200) {
        this.editorClosed.emit('update');
      }
    } catch (error) {
      this.errorMessage = 'Failed to update ambulance';
    }
  }

  render() {
    if (this.errorMessage) {
      return (
        <Host>
          <div class="error">{this.errorMessage}</div>
        </Host>
      );
    }

    const isUpdate = !!this.ambulanceId;

    return (
      <Host>
        <div>
          {this.errorMessage ? (
            <div class="error">{this.errorMessage}</div>
          ) : (
            <div>
              <form ref={el => (this.formElement = el)}>
                <md-filled-text-field
                  label="Name"
                  required
                  value={this.ambulance?.name}
                  onInput={(ev: InputEvent) => {
                    if (this.ambulance) {
                      this.ambulance.name = this.handleInputEvent(ev);
                    }
                  }}
                >
                  <md-icon slot="leading-icon">business</md-icon>
                </md-filled-text-field>

                <md-filled-text-field
                  label="Location"
                  required
                  value={this.ambulance?.location}
                  onInput={(ev: InputEvent) => (this.ambulance.location = (ev.target as HTMLInputElement).value)}
                >
                  <md-icon slot="leading-icon">location_on</md-icon>
                </md-filled-text-field>

                {/* contact */}
                <md-filled-text-field
                  label="Contact"
                  required
                  value={this.ambulance?.contact}
                  onInput={(ev: InputEvent) => (this.ambulance.contact = (ev.target as HTMLInputElement).value)}
                >
                  <md-icon slot="leading-icon">phone</md-icon>
                </md-filled-text-field>

                <md-divider></md-divider>
                <md-filled-text-field label="Number of Doctors" disabled type="number" value={this.ambulance?.doctorCount.toString()}>
                  <md-icon slot="leading-icon">people</md-icon>
                </md-filled-text-field>

                <md-filled-text-field label="Number of Nurses" required disabled type="number" value={this.ambulance?.nurseCount.toString()}>
                  <md-icon slot="leading-icon">people</md-icon>
                </md-filled-text-field>
              </form>

              <md-divider></md-divider>
              <div class="actions">
                <md-outlined-button id="cancel" onClick={() => this.editorClosed.emit('cancel')}>
                  Cancel
                </md-outlined-button>
                {isUpdate ? (
                  <div>
                    <md-outlined-button id="update" onClick={() => this.updateAmbulance()}>
                      <md-icon slot="icon">edit</md-icon>
                      Update
                    </md-outlined-button>
                    <md-outlined-button id="employee-list" onClick={() => this.employeeList.emit('employee')}>
                      <md-icon slot="icon">person</md-icon>
                      Employee List
                    </md-outlined-button>
                  </div>
                ) : (
                  <md-filled-button id="confirm" onClick={() => this.createAmbulance()}>
                    <md-icon slot="icon">save</md-icon>
                    Create
                  </md-filled-button>
                )}
              </div>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
