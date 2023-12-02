import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
    {
      name: 'Arghya Saha',
      age: 23,
      id: '1',
      bloodGroup: 'A+',
    },
    {
      name: 'Arghya Saha2',
      age: 23,
      id: '2',
      bloodGroup: 'A+',
    },
    {
      name: 'Arghya Saha3',
      age: 23,
      id: '3',
      bloodGroup: 'A+',
    },
    {
      name: 'Arghya Saha4',
      age: 23,
      id: '4',
      bloodGroup: 'A+',
    },
  ];

  public employeeObs = new BehaviorSubject<Employee[]>(this.employees.slice());

  constructor() {}

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.employeeObs.next(this.employees.slice());
  }

  deleteEmployee(id: string) {
    this.employees = this.employees.filter((employee) => employee.id !== id);
    this.employeeObs.next(this.employees.slice());
  }

  fetchEmployees() {
    return this.employeeObs;
  }

  findEmployee(query: string) {
    return this.employees.filter((employee) => {
      for (let value of Object.values(employee)) {
        if (value.toString().includes(query)) return true;
      }
      return false;
    });
  }
}
