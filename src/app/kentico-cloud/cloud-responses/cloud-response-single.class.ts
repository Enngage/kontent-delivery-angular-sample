import { IItem } from '../interfaces/iitem.interface';
import { IModularContent } from '../interfaces/imodular-content.interface';

export class CloudResponseSingle<TItem extends IItem<TItem>> {
  constructor(
    public item: TItem,
    public modular_content: IModularContent[]
  ) { }
}
