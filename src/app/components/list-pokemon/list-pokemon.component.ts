import { Component, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { ApiWrapperService } from 'src/app/services/api-wrapper.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent {
  @Output() pokemon = new EventEmitter<Pokemon>();

  listPokemons: Pokemon[] = [];

  constructor(private apiWrapper: ApiWrapperService) {}

  async ngOnInit() {
    (await this.apiWrapper.getAllPokemon()).subscribe((res) => {
      this.listPokemons = res;
    });
  }

  clickPokemon(event: Event) {
    const ID = parseInt((event['target'] as Element).id);
    this.pokemon.emit(this.listPokemons[ID - 1]);

    console.log({ pokemonName: this.listPokemons[ID - 1].name.english });
  }
}
