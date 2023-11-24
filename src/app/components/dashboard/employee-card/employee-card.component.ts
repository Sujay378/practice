import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
  @Input('employeeDetails') employee: Employee = {
    name: 'Arghya Saha',
    age: 23,
    id: '10727126',
    bloodGroup: 'A+',
  };
  @Output() dleteEmployee = new EventEmitter<Employee>();

  ngOnInit() {}

  deleteMe() {
    this.dleteEmployee.emit(this.employee);
  }

  editMe() {}
}
