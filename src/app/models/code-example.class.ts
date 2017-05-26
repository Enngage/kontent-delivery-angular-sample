import { BaseItem } from '../kentico-cloud/models/base-item.class';
import { TextField, NumberField, AssetsField, MultipleChoiceField } from '../kentico-cloud/fields/field-types';

// nested type models
import { Author } from './author.class';
import { Category } from './category.class';

export class CodeExample extends BaseItem {
  
  public title: TextField;
  public author: Author;
  public category: Category;
  public versions: MultipleChoiceField;
}

