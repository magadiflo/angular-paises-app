import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  paises: Country[] = [];
  termino: string = '';
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(term: string): void {
    this.hayError = false;

    this.termino = term;
    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (paises: Country[]) => {
          this.paises = paises;
        },
        error: err => {
          this.hayError = true;
          this.paises = [];
        }
      });
  }

  sugerencias(term: string): void {
    this.hayError = false;
    //TODO: crear sugerencias
  }

}
