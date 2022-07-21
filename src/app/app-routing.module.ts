import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    { path: '', component: PorPaisComponent, pathMatch: 'full' },
    { path: 'region', component: PorRegionComponent },
    { path: 'capital', component: PorCapitalComponent },
    { path: 'pais/:id', component: VerPaisComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule, //* Nos permite además, trabajar con el routerLink
    ],
})
export class AppRoutingModule {

}
/**
 * * pathMatch, estrategia que determina si una url pertenece o no a una ruta
 * * El atributo pathMatch, puede tomar 2 valores: full o prefix
 * * ---> full, debe coincidir la ruta completa con la URL completa. Se aplica 
 * *      a la ruta vacía, ya que la misma es un prefijo de cualquier URL y 
 * *      puede provocar un bucle sin fin.
 * * ---> prefix(por defecto), significa que se elige la primera ruta donde la 
 * *      ruta coincide con el inicio de la URL, pero luego el algoritmo de 
 * *      coincidencia de ruta continúa buscando rutas secundarias coincidentes 
 * *      donde coincide el resto de la URL.
 */