import { IItem } from '../interfaces/iitem.interface';
import { IModularContent } from '../interfaces/imodular-content.interface';

export class ResponseSingle<T> {
  constructor(
    public item: IItem<T>,
    public modular_content: IModularContent[]
  ) { }
}
