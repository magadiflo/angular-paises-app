import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  activarRegion(region: string): void {
    this.regionActiva = region;
    //TODO: hacer el llamado al servicio para traer los paises por la región
  }

}
