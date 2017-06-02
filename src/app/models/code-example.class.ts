import { ContentItem, TextField, NumberField, DateTimeField, RichTextField, MultipleChoiceField } from 'kentico-cloud-delivery-typescript-sdk';

// nested type models
import { Author } from './author.class';
import { Category } from './category.class';

export class CodeExample extends ContentItem {
  
  public title: TextField;
  public author: Author;
  public category: Category;
  public versions: MultipleChoiceField;
}

