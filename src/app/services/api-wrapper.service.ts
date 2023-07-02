import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiWrapperService {
  constructor(private http: HttpClient) {}

  async getAllPokemon(): Promise<Observable<Pokemon[]>> {
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemons');
  }
}
