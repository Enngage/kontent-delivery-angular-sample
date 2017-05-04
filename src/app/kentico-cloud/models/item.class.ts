import { ISystem } from '../interfaces/isystem.interface';
import { IItem } from '../interfaces/iitem.interface';

export class Item<T> implements IItem<T> {
  constructor(
    public system: ISystem,
    public elements: T,
  ) { }
}

