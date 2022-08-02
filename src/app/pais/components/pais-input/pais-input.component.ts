import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  //* Por lo general a las variables que creemos y que serán emitidas se les antepone el on...onEnter, etc..
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); //* Haremos que se emita cuando la persona deje de escribir

  //* Subject, es un observable especial
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300)) //* Después de la última tecla presionada que espere 300 milésimas de segundos para hacer el subscribe
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }

  buscar(): void {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(): void {
    this.debouncer.next(this.termino); //* Enviando siguiente valor [cada vez que se presione una tecla en el input se llama al método teclaPresionada()]
  }

}
