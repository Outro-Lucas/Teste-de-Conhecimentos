import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PokeService {

    constructor(private http: HttpClient) { }

    private apiUrl: string = 'https://pokeapi.co/api/v2';

    getPokemon(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/pokemon/${id}`);
    }

    getPokemonDescription(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/characteristic/${id}`);
    }

}