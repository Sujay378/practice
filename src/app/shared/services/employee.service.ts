import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
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

  constructor() {}

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  deleteEmployee(id: string) {
    this.employees = this.employees.filter((employee) => employee.id !== id);
  }

  fetchEmployees() {
    return this.employees;
  }

  findEmployee() {}
}
