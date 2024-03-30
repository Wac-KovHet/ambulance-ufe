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

  ambulances: any[] = [];

  private async getAmbulancesAsync() {
    // Replace this with your actual method to fetch ambulances from backend
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
  }

  render() {
    return (
      <Host>
        <md-list>
          {this.ambulances.map(ambulance => (
            <md-list-item onClick={() => this.entryClicked.emit(ambulance.id)}>
              <div slot="headline">{ambulance.name}</div>
              <div slot="supporting-text">{'Location: ' + ambulance.location}</div>
              <div slot="supporting-text">{'Doctors: ' + ambulance.number_of_doctors}</div>
              <div slot="supporting-text">{'Nurses: ' + ambulance.number_of_nurses}</div>
              <md-icon slot="start">person</md-icon>
              <md-icon slot="end">arrow_forward</md-icon>
            </md-list-item>
          ))}
        </md-list>
        <md-filled-icon-button class="add-button" onclick={() => this.entryClicked.emit('@new')}>
          <md-icon>add</md-icon>
        </md-filled-icon-button>
      </Host>
    );
  }
}
