import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-state-modal',
  templateUrl: './state-modal.component.html',
  styleUrls: ['./state-modal.component.css']
})
export class StateModalComponent {
  @Output() changeState: EventEmitter<string> = new EventEmitter<string>();
  
  changebtnstate(newState:string) {
    this.changeState.emit(newState);
  }

}
