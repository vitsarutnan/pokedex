import { Component, Input } from '@angular/core';
import { Base, Pokemon } from 'src/app/interfaces/pokemon';

import '@refinitiv-ui/elements/pill';
import '@refinitiv-ui/elements/slider';
import '@refinitiv-ui/elements/item';
import '@refinitiv-ui/elements/loader';

import '@refinitiv-ui/elements/pill/themes/halo/light';
import '@refinitiv-ui/elements/slider/themes/halo/light';
import '@refinitiv-ui/elements/item/themes/halo/light';
import '@refinitiv-ui/elements/loader/themes/halo/light';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss'],
})
export class ShowCaseComponent {
  @Input() pokemon: Pokemon = {
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

  maxBase: Base = {
    Attack: 181,
    Defense: 230,
    HP: 255,
    'Sp. Attack': 173,
    'Sp. Defense': 230,
    Speed: 160,
  };
}
