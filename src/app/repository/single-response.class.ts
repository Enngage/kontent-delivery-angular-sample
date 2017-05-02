import { System } from './system.class'
import { Item } from './item.class'
import { ModularContent } from './modular-content.class';

export class SingleResponse {
  constructor(
    public item: Item,
    public modular_content: any
  ) { }
}
