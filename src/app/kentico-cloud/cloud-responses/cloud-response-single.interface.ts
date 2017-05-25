import { IItem } from '../interfaces/iitem.interface';
import { IModularContent } from '../interfaces/imodular-content.interface';

export class ICloudResponseSingle {
  constructor(
    public item: IItem,
    public modular_content: IModularContent[]
  ) { }
}
