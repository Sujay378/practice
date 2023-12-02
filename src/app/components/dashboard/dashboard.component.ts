import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private _modalservice: ModalService,
    private _emplyeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this._emplyeeService.fetchEmployees().subscribe((employeeSlice) => {
      this.employees = employeeSlice;
    });
  }

  dleteAnEmployee(employee: Employee) {
    this._emplyeeService.deleteEmployee(employee.id);
  }

  addEmployee() {
    this._modalservice.open();
  }
}
