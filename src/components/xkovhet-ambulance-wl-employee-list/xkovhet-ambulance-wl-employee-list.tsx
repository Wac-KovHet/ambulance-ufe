import { Component, Host, h, State, Event, EventEmitter, Prop } from '@stencil/core';

interface Employee {
  id: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  position: 'doctor' | 'nurse';
  wage: number;
}

@Component({
  tag: 'xkovhet-ambulance-wl-employee-list',
  styleUrl: 'xkovhet-ambulance-wl-employee-list.css',
  shadow: true,
})
export class XkovhetAmbulanceWlEmployeeList {
  @Event({ eventName: 'employee-clicked' }) employeeClicked: EventEmitter<string>;

  @Prop() ambulanceId: string;

  @State() employees: Employee[] = [
    { id: '1', name: 'John', surname: 'Doe', dateOfBirth: '1985-01-15', position: 'doctor', wage: 5000 },
    { id: '2', name: 'Jane', surname: 'Smith', dateOfBirth: '1990-05-22', position: 'nurse', wage: 3500 },
    // Add more employees as needed
  ];

  async componentWillLoad() {
    console.log(this.ambulanceId);
  }

  render() {
    return (
      <Host>
        <div>
          <md-list>
            {this.employees.map(employee => (
              <md-list-item onClick={() => this.employeeClicked.emit(employee.id)}>
                <div slot="headline">
                  {employee.name} {employee.surname}
                </div>
                <div slot="supporting-text">
                  {employee.dateOfBirth} - {employee.position}
                </div>
                <div slot="trailing-supporting-text">{'Wage: ' + employee.wage}$</div>
              </md-list-item>
            ))}
          </md-list>
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
