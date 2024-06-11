import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../service/poke.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questao-1',
  standalone: true,
  imports: [NgFor],
  templateUrl: './questao-1.component.html',
  styleUrl: './questao-1.component.css'
})
export class Questao1Component implements OnInit {

  public pokemon: any;
  public description = '';
  public abilities: any[] = [];
  public stats: any[] = [];

  constructor(
    private readonly pokeService: PokeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pokeService.getPokemon(25).subscribe(
      (data: any) => {
        this.pokemon = data;
        this.abilities = data.abilities;
        this.stats = data.stats;
      }, error => {
        console.log(error);
      }
    );

    this.pokeService.getPokemonDescription(25).subscribe(
      (data: any) => {
        this.description = data.descriptions[7].description;
      }, error => {
        console.log(error);
      }
    );

  }

  public firstLetter(text: string): string {
    if (!text) {
      return text;
    }

    return text.replace(/\b\w+/g, (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  }

  public goToHome() {
    this.router.navigate([`/`]);
  }

}
