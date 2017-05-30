import { BaseItem } from 'kentico-cloud-angular2-sdk';
import { TextField, NumberField, AssetsField, MultipleChoiceField } from 'kentico-cloud-angular2-sdk';

// nested type models
import { Author } from './author.class';
import { Category } from './category.class';

export class CodeExample extends BaseItem {
  
  public title: TextField;
  public author: Author;
  public category: Category;
  public versions: MultipleChoiceField;
}

