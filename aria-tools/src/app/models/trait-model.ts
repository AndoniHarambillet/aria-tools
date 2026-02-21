import { Modifiers } from './modifiers-model';

export interface Trait {
  id: number;
  name: string;
  description: string;
  modifiers: Modifiers;
  weight: number;
}
