import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  form!: FormGroup;
  employee: Employee | null = null;

  constructor(
    private _modalService: ModalService,
    private _fb: FormBuilder,
    private _employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      name: [this.employee?.name || '', [Validators.required]],
      id: [this.employee?.id || '', [Validators.required]],
      age: [
        this.employee?.age || '',
        [Validators.required, Validators.min(18)],
      ],
      bloodGroup: [this.employee?.bloodGroup || '', [Validators.required]],
    });
  }

  submit() {
    if (this.form.valid) {
      this._employeeService.addEmployee(this.form.value);
      this.closeModal();
    } else {
      this.form.reset();
      alert('Form is not valid');
    }
  }

  closeModal() {
    this._modalService.close();
  }
}
