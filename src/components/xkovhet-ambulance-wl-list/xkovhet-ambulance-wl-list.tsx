import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
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

  loading = true;

  ambulances = [];
  numberOfAmbulances = 0;
  numberOfDoctors = 0;
  numberOfNurses = 0;
  numberOfPatients = 0;

  private async getAmbulancesAsync() {
    this.loading = true;
    // await new Promise(resolve => setTimeout(resolve, 1500));
    return await Promise.resolve([
      {
        id: '1',
        name: 'Cardiology Ambulance',
        number_of_doctors: 2,
        number_of_nurses: 3,
        location: 'A 1.25',
      },
      {
        id: '2',
        name: 'Chirurgical Ambulance',
        number_of_doctors: 1,
        number_of_nurses: 2,
        location: 'B 3.14',
      },
      {
        id: '3',
        name: 'Pediatric Ambulance',
        number_of_doctors: 1,
        number_of_nurses: 3,
        location: 'C 2.71',
      },
      {
        id: '4',
        name: 'General Ambulance',
        number_of_doctors: 2,
        number_of_nurses: 4,
        location: 'D 1.41',
      },
      {
        id: '5',
        name: 'Oncology Ambulance',
        number_of_doctors: 3,
        number_of_nurses: 2,
        location: 'E 1.61',
      },
    ]);
  }

  async componentWillLoad() {
    this.ambulances = await this.getAmbulancesAsync();
    this.numberOfAmbulances = this.ambulances.length;
    this.numberOfDoctors = this.ambulances.reduce((acc, curr) => acc + curr.number_of_doctors, 0);
    this.numberOfNurses = this.ambulances.reduce((acc, curr) => acc + curr.number_of_nurses, 0);
    this.loading = false;
  }

  render() {
    return (
      <Host>
        {/* Navbar */}
        <nav class="navbar">
          <div class="navbar-brand">
            <md-icon>local_hospital</md-icon>
            <span class="hospital-name">KovHet</span>
            <span class="hospital-info">
              <span class="hospital-address">Ilkovičova 2</span>
              <span class="hospital-email">kovhet@stuba.sk</span>
            </span>
          </div>
        </nav>
        {/* Card with General Information */}
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
          <md-list class="custom-list">
            {this.ambulances.map(ambulance => (
              <div>
                <md-list-item onClick={() => this.entryClicked.emit(ambulance.id)}>
                  <div slot="headline">{ambulance.name}</div>
                  <div slot="supporting-text">{'Location: ' + ambulance.location}</div>
                  <div slot="supporting-text">{'Doctors: ' + ambulance.number_of_doctors}</div>
                  <div slot="supporting-text">{'Nurses: ' + ambulance.number_of_nurses}</div>
                  <md-icon slot="start">emergency</md-icon>

                  <md-filled-icon-button slot="end" class="update-button" onclick={() => this.entryClicked.emit(ambulance.id)}>
                    <md-icon>edit</md-icon>
                  </md-filled-icon-button>
                  <md-filled-icon-button slot="end" class="delete-button" onclick={() => this.entryClicked.emit(ambulance.id)}>
                    <md-icon>delete</md-icon>
                  </md-filled-icon-button>
                </md-list-item>
                <md-divider />
              </div>
            ))}
          </md-list>
        )}
        {/* adding new ambulance button */}

        {/* create button with margin top 10 */}

        <md-filled-button onclick={() => this.entryClicked.emit('@new')}>
          <md-icon class="mt-3" slot="icon">
            add
          </md-icon>
          Add New Ambulance
        </md-filled-button>
      </Host>
    );
  }
}
