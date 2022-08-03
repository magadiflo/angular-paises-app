import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private readonly apiUrl: string = 'https://restcountries.com/v2';

  private get httpParams(): HttpParams {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flags,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${termino}`, { params: this.httpParams });
  }

  buscarPorCapital(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${termino}`, { params: this.httpParams });
  }

  getPaisPorAlpha(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/alpha/${code}`);
  }

  buscarRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`, { params: this.httpParams });
  }

}
