import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private url = "https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) { }

  getOne(id: string): Observable<Object> {
    return this.http.get(this.url + `/${id} `)
  }

}
