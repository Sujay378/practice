import { Component } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  employees: Employee[] = [
    {
      name: 'Arghya Saha',
      age: 23,
      id: '10727126',
      bloodGroup: 'A+',
    },
    {
      name: 'Arghya Saha2',
      age: 23,
      id: '10727126',
      bloodGroup: 'A+',
    },
    {
      name: 'Arghya Saha3',
      age: 23,
      id: '10727126',
      bloodGroup: 'A+',
    },
    {
      name: 'Arghya Saha4',
      age: 23,
      id: '10727126',
      bloodGroup: 'A+',
    },
  ];

  dleteAnEmployee(employee: Employee) {
    this.employees = this.employees.filter(
      (value) => value.name !== employee.name
    );
  }
}
