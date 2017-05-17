import { ISystem } from '../../kentico-cloud/interfaces/isystem.interface';
import { IItem } from '../../kentico-cloud/interfaces/iitem.interface';
import { TextField, AssetsField } from '../../kentico-cloud/fields/field-types';

export class Author implements IItem<Author> { 

  constructor(
    public system: ISystem,
    public name: TextField,
    public image: AssetsField,
    public elements: any
  ) {}
}

