import { Component, Host, h, State } from '@stencil/core';

interface Employee {
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
  @State() employees: Employee[] = [
    { name: 'John', surname: 'Doe', dateOfBirth: '1985-01-15', position: 'doctor', wage: 5000 },
    { name: 'Jane', surname: 'Smith', dateOfBirth: '1990-05-22', position: 'nurse', wage: 3500 },
    // Add more employees as needed
  ];

  render() {
    return (
      <Host>
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
              </md-list-item>
            ))}
          </md-list>
        </div>

        {/* Back button */}

        <div>
          <md-outlined-button onClick={() => window.history.back()}>Back</md-outlined-button>
        </div>
      </Host>
    );
  }
}
