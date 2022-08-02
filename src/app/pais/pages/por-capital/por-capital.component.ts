import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  paises: Country[] = [];
  hayError: boolean = false;
  termino: string = '';

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {

  }

  buscar(term: string): void {
    this.hayError = false;
    this.termino = term;

    this.paisService.buscarPorCapital(this.termino)
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

}
