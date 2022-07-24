import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  //* Por lo general a las variables que creemos y que serán emitidas se les antepone el on...onEnter, etc..
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  termino: string = '';

  buscar(): void {
    this.onEnter.emit(this.termino);
  }

}
