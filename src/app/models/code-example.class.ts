import { ISystem } from '../kentico-cloud/interfaces/isystem.interface';
import { IItem } from '../kentico-cloud/interfaces/iitem.interface';
import { TextField } from '../kentico-cloud/fields/field-types';

// nested type models
import { Author } from './author.class';
import { Category } from './category.class';

export class CodeExample implements IItem {

  constructor(
    public system: ISystem,
    public elements: any,
    public title: TextField,
    public author: Author,
    public category: Category
  ) { }
}

