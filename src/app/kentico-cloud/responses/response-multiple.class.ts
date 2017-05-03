import { IItem } from '../interfaces/iitem.interface';
import { IModularContent } from '../interfaces/imodular-content.interface';

export class ResponseMultiple {
  constructor(
    public items: IItem[],
    public modular_content: IModularContent[]
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
