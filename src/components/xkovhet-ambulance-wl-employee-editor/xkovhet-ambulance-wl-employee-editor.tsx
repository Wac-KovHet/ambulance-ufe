import { Component, Host, h, Event, EventEmitter, Prop, State } from '@stencil/core';
import { EmployeeListApiFactory, EmployeeRequest, EmployeeResponse } from '../../api/ambulance-wl';
@Component({
  tag: 'xkovhet-ambulance-wl-employee-editor',
  styleUrl: 'xkovhet-ambulance-wl-employee-editor.css',
  shadow: true,
})
export class XkovhetAmbulanceWlEmployeeEditor {
  @Event({ eventName: 'editor-closed' }) editorClosed: EventEmitter<string>;
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;
  @Prop() employeeId: string;

  @State() private errorMessage: string = '';
  private formElement: HTMLFormElement;
  private employee: EmployeeResponse = {
    id: '',
    name: '',
    surname: '',
    dateOfBirth: '',
    position: '',
    wage: 0,
  };

  async componentWillLoad() {
    if (this.employeeId) {
      await this.fetchEmployeeDetails();
    }
  }

  private async fetchEmployeeDetails() {
    try {
      const api = EmployeeListApiFactory(undefined, this.apiBase);
      const response = await api.getEmployee(this.ambulanceId, this.employeeId);

      if (response.status === 200) {
        this.employee = await response.data;
      }
    } catch (error) {
      this.errorMessage = 'Failed to fetch employee details';
    }
  }

  private async updateEmployee() {
    if (!this.formElement.checkValidity()) {
      this.formElement.reportValidity();
      return;
    }
    this.formElement.reportValidity();

    try {
      const employeRequest: EmployeeRequest = {
        name: this.employee.name,
        surname: this.employee.surname,
        dateOfBirth: this.employee.dateOfBirth,
        position: this.employee.position,
        wage: this.employee.wage,
      };
      const api = EmployeeListApiFactory(undefined, this.apiBase);
      const response = await api.updateEmployee(this.ambulanceId, this.employeeId, employeRequest);

      if (response.status === 200) {
        this.editorClosed.emit('confirm');
      }
    } catch (error) {
      console.error('Failed to update employee', error);
      this.errorMessage = 'Failed to update employee';
      this.render();
    }
    this.editorClosed.emit('confirm');
  }

  private async createEmployee() {
    if (!this.formElement.checkValidity()) {
      this.formElement.reportValidity();
      return;
    }
    this.formElement.reportValidity();

    try {
      const employeRequest: EmployeeRequest = {
        name: this.employee.name,
        surname: this.employee.surname,
        dateOfBirth: this.employee.dateOfBirth,
        position: this.employee.position,
        wage: this.employee.wage,
      };
      const api = EmployeeListApiFactory(undefined, this.apiBase);
      const response = await api.createEmployee(this.ambulanceId, employeRequest);

      if (response.status === 201) {
        this.editorClosed.emit('confirm');
      }
    } catch (error) {
      console.error('Failed to create employee', error);
      this.errorMessage = 'Failed to create employee';
      this.render();
    }

    this.editorClosed.emit('confirm');
  }

  render() {
    const isUpdate = !!this.employeeId;
    return (
      <Host>
        <div>
          {this.errorMessage ? (
            <div class="error">{this.errorMessage}</div>
          ) : (
            <div>
              <form ref={el => (this.formElement = el)}>
                <md-filled-text-field label="Name" required value={this.employee.name} onInput={(ev: InputEvent) => (this.employee.name = (ev.target as HTMLInputElement).value)}>
                  <md-icon slot="leading-icon">person</md-icon>
                </md-filled-text-field>

                <md-filled-text-field
                  label="Surname"
                  required
                  value={this.employee.surname}
                  onInput={(ev: InputEvent) => (this.employee.surname = (ev.target as HTMLInputElement).value)}
                >
                  <md-icon slot="leading-icon">person</md-icon>
                </md-filled-text-field>

                <md-filled-text-field
                  label="Date of Birth"
                  required
                  type="date"
                  value={this.employee.dateOfBirth}
                  onInput={(ev: InputEvent) => (this.employee.dateOfBirth = (ev.target as HTMLInputElement).value)}
                >
                  <md-icon slot="leading-icon">date_range</md-icon>
                </md-filled-text-field>

                <md-filled-select label="Position" required>
                  <md-select-option value="Doctor">
                    <div slot="headline">Doctor</div>
                  </md-select-option>
                  <md-select-option value="Nurse">
                    <div slot="headline">Nurse</div>
                  </md-select-option>
                  <md-icon slot="leading-icon">work</md-icon>
                </md-filled-select>

                <md-filled-text-field
                  label="Wage"
                  required
                  type="number"
                  min="100"
                  step="100"
                  value={this.employee.wage.toString()}
                  onInput={(ev: InputEvent) => (this.employee.wage = parseInt((ev.target as HTMLInputElement).value))}
                >
                  <md-icon slot="leading-icon">attach_money</md-icon>
                </md-filled-text-field>
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
            </div>
          )}
        </div>
      </Host>
    );
  }
}
