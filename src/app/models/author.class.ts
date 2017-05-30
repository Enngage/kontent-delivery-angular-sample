import { BaseItem } from 'kentico-cloud-angular2-sdk';
import { TextField, NumberField, AssetsField } from 'kentico-cloud-angular2-sdk';

export class Author extends BaseItem {
  public name: TextField;
  public image: AssetsField;
}

