import { System } from './system.class'
import { Item } from './item.class'
import { ModularContent } from './modular-content.class';

export class MultipleResponse {
  constructor(
    public items: Item[],
    public modular_content: ModularContent[]
  ) { }

  public getFirstItem(){
    if (!this.items){
      return null;
    }

    if (this.items.length < 1){
        return null;
    }

    return this.items[0];
  }
}
