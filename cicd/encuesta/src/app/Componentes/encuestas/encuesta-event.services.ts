import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class EncuestaEventService {

  isAdd = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isAdd = true;
    this.change.emit(this.isAdd);
  }

}