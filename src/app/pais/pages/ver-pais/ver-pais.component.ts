import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)), //* switchMap, recibe el valor del observable anterior y retorna un nuevo observable
        tap(pais => console.log(pais)) //* Operador que dispara un efecto secundario. Solo lo usaremos para mostrar el resultado que devuelve el observable del switchMap
      )
      .subscribe(pais => this.pais = pais);
  }

}
