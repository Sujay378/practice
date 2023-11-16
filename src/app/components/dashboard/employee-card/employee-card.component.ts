import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent {
  @Input()
  employee: Employee | null = {
    name: 'Arghya Saha',
    age: 23,
    id: '10727126',
    bloodGroup: 'A+',
  };
  @Output() dleteEmployee = new EventEmitter();

  deleteMe() {
    this.dleteEmployee.emit();
  }

  editMe() {}
}
