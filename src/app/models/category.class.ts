import { ISystem } from '../kentico-cloud/interfaces/isystem.interface';
import { IItem } from '../kentico-cloud/interfaces/iitem.interface';
import { TextField } from '../kentico-cloud/fields/field-types';

export class Category implements IItem{ 

  constructor(
    public system: ISystem,
    public elements: any,
    public category_name: TextField,
  ) {}

}

