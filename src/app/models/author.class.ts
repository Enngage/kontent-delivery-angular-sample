import { BaseItem } from '../kentico-cloud/models/base-item.class';
import { TextField, NumberField, AssetsField } from '../kentico-cloud/fields/field-types';

export class Author extends BaseItem {
  public name: TextField;
  public image: AssetsField;
}

