import { Component, Host, h, State, Event, EventEmitter, Prop } from '@stencil/core';
import { EmployeeListApiFactory, EmployeeResponse } from '../../api/ambulance-wl';

@Component({
  tag: 'xkovhet-ambulance-wl-employee-list',
  styleUrl: 'xkovhet-ambulance-wl-employee-list.css',
  shadow: true,
})
export class XkovhetAmbulanceWlEmployeeList {
  @Event({ eventName: 'employee-clicked' }) employeeClicked: EventEmitter<string>;
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;

  @State() employees: EmployeeResponse[] = [];
  @State() errorMessage: string = '';

  async componentWillLoad() {
    this.fetchEmployees();
  }

  private async fetchEmployees() {
    try {
      const api = EmployeeListApiFactory(undefined, this.apiBase);
      const response = await api.getEmployeeList(this.ambulanceId);

      if (response.status === 200) {
        this.employees = await response.data;
      }
    } catch (error) {
      this.errorMessage = 'Failed to fetch employees';
      console.error('Failed to fetch employees', error);
    }
  }

  private async deleteEmployee(employeeId: string) {
    try {
      const api = EmployeeListApiFactory(undefined, this.apiBase);
      const response = await api.deleteEmployee(this.ambulanceId, employeeId);

      if (response.status === 204) {
        this.employees = this.employees.filter(employee => employee.id !== employeeId);
      }
    } catch (error) {
      console.error('Failed to delete employee', error);
    }
  }

  render() {
    return (
      <Host>
        <div>
          {this.errorMessage ? (
            <div class="error">{this.errorMessage}</div>
          ) : (
            <div>
              <md-list>
                {this.employees.map(employee => (
                  <md-list-item>
                    <div slot="headline">
                      {employee.name} {employee.surname}
                    </div>
                    <div slot="supporting-text">
                      {employee.dateOfBirth} - {employee.position}
                    </div>
                    <div slot="trailing-supporting-text">{'Wage: ' + employee.wage}$</div>
                    <md-filled-icon-button slot="end" class="update-button" onclick={() => this.employeeClicked.emit(employee.id)}>
                      <md-icon>edit</md-icon>
                    </md-filled-icon-button>
                    <md-filled-icon-button slot="end" class="delete-button" onclick={() => this.deleteEmployee(employee.id)}>
                      {' '}
                      <md-icon>delete</md-icon>
                    </md-filled-icon-button>
                  </md-list-item>
                ))}
              </md-list>
            </div>
          )}
        </div>

        <div class="actions">
          <md-outlined-button onClick={() => this.employeeClicked.emit('@new')}>
            <md-icon slot="icon">add</md-icon>
            Add Employee
          </md-outlined-button>
        </div>
      </Host>
    );
  }
}
