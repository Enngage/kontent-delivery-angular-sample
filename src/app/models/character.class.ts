import { BaseItem } from '../kentico-cloud/models/base-item.class';
import { TextField, NumberField } from '../kentico-cloud/fields/field-types';

export class Character extends BaseItem {

  public name: TextField;
  public someNumber: NumberField;

  public resolver = ((fieldName: string) => {
    if (fieldName === 'somenumber') {
      return 'someNumber';
    }
    return fieldName;
  });

  constructor() {
    super()
  }
}

