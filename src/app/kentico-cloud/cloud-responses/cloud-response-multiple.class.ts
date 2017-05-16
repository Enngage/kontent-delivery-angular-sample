import { IItem } from '../interfaces/iitem.interface';
import { IModularContent } from '../interfaces/imodular-content.interface';
import { IPagination } from '../interfaces/ipagination.interface';

export class CloudResponseMultiple<TItem extends IItem<TItem>> {
  constructor(
    public items: TItem[],
    public modular_content: IModularContent[],
    public pagination: IPagination
  ) { }

}
