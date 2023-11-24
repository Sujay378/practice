import { Component, OnInit } from '@angular/core';
import { ModalService } from './shared/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  flag: boolean = false;

  constructor(private _modalService: ModalService) {}

  ngOnInit(): void {
    this._modalService.modalOps.subscribe((flag) => {
      this.flag = flag;
    });
  }
}
