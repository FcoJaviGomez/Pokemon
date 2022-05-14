import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/servicios/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokemon: any | undefined

  constructor(public pokemonService: PokemonsService) {
    this.pokemon = undefined
  }

  getPokemon(id: string) {
    this.pokemonService.getOne(id).subscribe((data: any) => {
      console.log(data);
      this.pokemon = data
    })
  }

  ngOnInit(): void {
  }

}
