export interface Pokemon {
  id: number;
  name: Name;
  type: string[];
  base: Base;
  species: string;
  description: string;
  evolution: Evolution;
  profile: Profile;
  images: Images;
}

export interface Base {
  HP: number;
  Attack: number;
  Defense: number;
  'Sp. Attack': number;
  'Sp. Defense': number;
  Speed: number;
}

interface Evolution {
  next: Array<string[]>;
}

interface Images {
  sprite: string;
  thumbnail: string;
  hires: string;
}

interface Name {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

interface Profile {
  height: string;
  weight: string;
  egg: string[];
  ability: Array<string[]>;
  gender: string;
}
