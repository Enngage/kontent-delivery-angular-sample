import { BaseItem } from '../kentico-cloud/models/base-item.class';
import { TextField, NumberField, DateTimeField, RichTextField } from '../kentico-cloud/fields/field-types';

export class Character extends BaseItem {

  public name: TextField;
  public someNumber: NumberField;
  public someDateTime: DateTimeField;
  public someRichText: RichTextField;

  public resolver = ((fieldName: string) => {
    if (fieldName === 'somenumber') {
      return 'someNumber';
    }
    else if(fieldName === 'somedate'){
      return 'someDateTime';
    }
    else if(fieldName === 'somerichtext'){
      return 'someRichText';
    }
  });

  constructor() {
    super()
  }
}

