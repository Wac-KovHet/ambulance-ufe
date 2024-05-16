import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'xkovhet-ambulance-wl-employee-editor',
  styleUrl: 'xkovhet-ambulance-wl-employee-editor.css',
  shadow: true,
})
export class XkovhetAmbulanceWlEmployeeEditor {
  @Event({ eventName: 'editor-closed' }) editorClosed: EventEmitter<string>;

  @Prop() ambulanceId: string;
  @Prop() employeeId: string;

  private formElement: HTMLFormElement;
  private employee = {
    name: '',
    surname: '',
    dateOfBirth: '',
    position: 'Doctor',
    wage: 0,
  };

  async componentWillLoad() {
    console.log('Ambulance ID: ', this.ambulanceId);
    console.log('Employee ID: ', this.employeeId);
  }

  private updateEmployee() {
    // Validate the form
    console.log(this.employee);
    if (!this.formElement.checkValidity()) {
      this.formElement.reportValidity();
      return;
    }
    // Emit the updated employee
    this.editorClosed.emit('confirm');
  }

  private createEmployee() {
    console.log(this.employee);
    if (!this.formElement.checkValidity()) {
      this.formElement.reportValidity();
      return;
    }

    this.editorClosed.emit('confirm');
  }

  render() {
    const isUpdate = !!this.employeeId;
    return (
      <Host>
        <form ref={el => (this.formElement = el)}>
          <md-filled-text-field
            label="Name"
            required
            value={this.employee.name}
            onInput={(ev: InputEvent) => (this.employee.name = (ev.target as HTMLInputElement).value)}
          ></md-filled-text-field>

          <md-filled-text-field
            label="Surname"
            required
            value={this.employee.surname}
            onInput={(ev: InputEvent) => (this.employee.surname = (ev.target as HTMLInputElement).value)}
          ></md-filled-text-field>

          <md-filled-text-field
            label="Date of Birth"
            required
            type="date"
            value={this.employee.dateOfBirth}
            onInput={(ev: InputEvent) => (this.employee.dateOfBirth = (ev.target as HTMLInputElement).value)}
          ></md-filled-text-field>

          <md-filled-select label="Position" required>
            <md-select-option value="apple">
              <div slot="headline">Doctor</div>
            </md-select-option>
            <md-select-option value="apricot">
              <div slot="headline">Nurse</div>
            </md-select-option>
          </md-filled-select>

          <md-filled-text-field
            label="Wage"
            required
            type="number"
            value={this.employee.wage.toString()}
            onInput={(ev: InputEvent) => (this.employee.wage = parseInt((ev.target as HTMLInputElement).value))}
          ></md-filled-text-field>

          <label class="checkbox">
            <md-checkbox touch-target="wrapper"></md-checkbox>
            Is Active
          </label>
        </form>

        <md-divider></md-divider>
        <div class="actions">
          <md-outlined-button id="cancel" onClick={() => window.history.back()}>
            Cancel
          </md-outlined-button>
          {isUpdate ? (
            <md-outlined-button id="update" onClick={() => this.updateEmployee()}>
              <md-icon slot="icon">edit</md-icon>
              Update
            </md-outlined-button>
          ) : (
            <md-filled-button id="confirm" onClick={() => this.createEmployee()}>
              <md-icon slot="icon">save</md-icon>
              Create
            </md-filled-button>
          )}
        </div>
      </Host>
    );
  }
}
