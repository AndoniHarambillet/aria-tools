import { Modifiers } from './modifiers-model';

export interface Item {
  id: number;
  name: string;
  description: string;
  modifiers: Modifiers;
}
