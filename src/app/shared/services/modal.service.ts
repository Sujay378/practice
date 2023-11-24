import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modalOps = new EventEmitter<boolean>();

  constructor() {}

  open() {
    this.modalOps.emit(true);
  }

  close() {
    this.modalOps.emit(false);
  }
}
