import { ISystem } from '../interfaces/isystem.interface';
import { IItem } from '../interfaces/iitem.interface';

export class Item implements IItem {
  constructor(
    public system: ISystem,
    public elements: any,
  ) { }
}

