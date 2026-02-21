import { Skill } from './skill-model';

export interface BaseStats {
  str: number;
  end: number;
  cha: number;
  int: number;
  dex: number;
  sens: number;
  hp: number;
  armor: number;
  fatigue: number;
  stress: number;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  origin: string;
  age: string;
  baseStats: BaseStats;
  skills: Skill[];
}
