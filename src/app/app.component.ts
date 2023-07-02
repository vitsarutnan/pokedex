import { Component } from '@angular/core';

import '@refinitiv-ui/elements/layout';

import '@refinitiv-ui/elements/layout/themes/halo/light';

import '@refinitiv-ui/halo-theme/light/imports/native-elements';
import { Pokemon } from './interfaces/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pokemon: Pokemon = {
    id: 1,
    name: {
      english: 'Bulbasaur',
      japanese: 'フシギダネ',
      chinese: '妙蛙种子',
      french: 'Bulbizarre',
    },
    type: ['Grass', 'Poison'],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      'Sp. Attack': 65,
      'Sp. Defense': 65,
      Speed: 45,
    },
    species: 'Seed Pokémon',
    description:
      'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.',
    evolution: {
      next: [['2', 'Level 16']],
    },
    profile: {
      height: '0.7 m',
      weight: '6.9 kg',
      egg: ['Monster', 'Grass'],
      ability: [
        ['Overgrow', 'false'],
        ['Chlorophyll', 'true'],
      ],
      gender: '87.5:12.5',
    },
    images: {
      sprite: '/pokedex/sprites/001MS.png',
      thumbnail: '/pokedex/thumbnails/001.png',
      hires: '/pokedex/hires/001.png',
    },
  };

  setPokemon(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }
}
