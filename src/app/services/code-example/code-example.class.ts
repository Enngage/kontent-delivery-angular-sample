import { ISystem } from '../../kentico-cloud/interfaces/isystem.interface';
import { IItem } from '../../kentico-cloud/interfaces/iitem.interface';
import { TextField } from '../../kentico-cloud/fields/field-types';

export class CodeExample implements IItem<CodeExample> { 

  public elements: any;

  constructor(
    public system: ISystem,
    public title: TextField,
  ) {}
}

