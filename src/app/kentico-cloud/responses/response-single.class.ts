import { IItem } from '../interfaces/iitem.interface';
import { IModularContent } from '../interfaces/imodular-content.interface';

export class ResponseSingle<TItem extends IItem<TItem>> {
  constructor(
    public item: TItem
  ) { }
}
