import { Component, Host, Prop, State, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'xkovhet-ambulance-wl-editor',
  styleUrl: 'xkovhet-ambulance-wl-editor.css',
  shadow: true,
})
export class XkovhetAmbulanceWlEditor {
  @Prop() ambulanceId: string;

  @Event({ eventName: 'editor-closed' }) editorClosed: EventEmitter<string>;

  @State() private ambulance: {
    name: string;
    numberOfDoctors: number;
    numberOfNurses: number;
    location: string;
    sizeOfWaitingRoom: number;
    isActive: boolean;
  } = {
    name: '',
    numberOfDoctors: 0,
    numberOfNurses: 0,
    location: '',
    sizeOfWaitingRoom: 0,
    isActive: false,
  };

  @State() private errorMessage: string;

  private formElement: HTMLFormElement;

  componentWillLoad() {
    // Initialize ambulance details
    this.ambulance = {
      name: '',
      numberOfDoctors: 0,
      numberOfNurses: 0,
      location: '',
      sizeOfWaitingRoom: 0,
      isActive: false,
    };
  }

  private handleSliderInput(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('Slider value: ', target.value);
    this.ambulance.sizeOfWaitingRoom = parseInt(target.value);
    this.formElement.addEventListener('submit', this.updateAmbulance);
  }

  render() {
    if (this.errorMessage) {
      return (
        <Host>
          <div class="error">{this.errorMessage}</div>
        </Host>
      );
    }

    return (
      <Host>
        <form ref={el => (this.formElement = el)}>
          <md-filled-text-field label="Name" required value={this.ambulance.name} onInput={(ev: InputEvent) => (this.ambulance.name = (ev.target as HTMLInputElement).value)}>
            <md-icon slot="leading-icon">business</md-icon>
          </md-filled-text-field>

          <md-filled-text-field
            label="Number of Doctors"
            required
            type="number"
            value={this.ambulance.numberOfDoctors.toString()}
            onInput={(ev: InputEvent) => (this.ambulance.numberOfDoctors = parseInt((ev.target as HTMLInputElement).value))}
          >
            <md-icon slot="leading-icon">people</md-icon>
          </md-filled-text-field>

          <md-filled-text-field
            label="Number of Nurses"
            required
            type="number"
            value={this.ambulance.numberOfNurses.toString()}
            onInput={(ev: InputEvent) => (this.ambulance.numberOfNurses = parseInt((ev.target as HTMLInputElement).value))}
          >
            <md-icon slot="leading-icon">people</md-icon>
          </md-filled-text-field>

          <md-filled-text-field
            label="Location"
            required
            value={this.ambulance.location}
            onInput={(ev: InputEvent) => (this.ambulance.location = (ev.target as HTMLInputElement).value)}
          >
            <md-icon slot="leading-icon">location_on</md-icon>
          </md-filled-text-field>

          <div class="size-slider">
            <span class="label">Size of Waiting Room: </span>
            <span class="label">{this.ambulance.numberOfNurses}</span>
            <md-slider
              min={1}
              max={100}
              step={1}
              ticks
              labeled
              value={this.ambulance.sizeOfWaitingRoom}
              onInput={(ev: InputEvent) => {
                this.ambulance.sizeOfWaitingRoom = parseInt((ev.target as HTMLInputElement).value);
                this.handleSliderInput(ev);
              }}
            ></md-slider>
          </div>

          <label class="checkbox">
            <md-checkbox touch-target="wrapper"></md-checkbox>
            Is Active
          </label>
        </form>

        <md-divider></md-divider>
        <div class="actions">
          <md-outlined-button id="cancel" onClick={() => this.editorClosed.emit('cancel')}>
            Cancel
          </md-outlined-button>
          <md-filled-button id="confirm" onClick={() => this.updateAmbulance()}>
            <md-icon slot="icon">save</md-icon>
            Save
          </md-filled-button>
        </div>
      </Host>
    );
  }

  private async updateAmbulance() {
    // Handle saving local data or any other logic
    this.editorClosed.emit('store');
  }
}
