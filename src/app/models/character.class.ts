import { ContentItem, TextField, NumberField, DateTimeField, RichTextField } from 'kentico-cloud-delivery-typescript-sdk';

export class Character extends ContentItem {
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

