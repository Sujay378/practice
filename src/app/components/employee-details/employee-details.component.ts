import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee = {
    name: 'Arghya Saha',
    age: 23,
    id: '1',
    bloodGroup: 'A+',
  };
  keys: string[] = [];

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.keys = Object.keys(this.employee);
  }

  backToDashboard() {
    this._router.navigate(['']);
  }
}
