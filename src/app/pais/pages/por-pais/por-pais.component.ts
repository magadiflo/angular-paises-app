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

  termino: string = 'Hola mundo';
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.hayError = false;

    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (paises: Country[]) => {
          console.log(paises);
        },
        error: err => {
          this.hayError = true;
        }
      });
  }

}
