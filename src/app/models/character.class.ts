import { BaseItem } from 'kentico-cloud-angular2-sdk';
import { TextField, NumberField, AssetsField, RichTextField, DateTimeField } from 'kentico-cloud-angular2-sdk';

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

