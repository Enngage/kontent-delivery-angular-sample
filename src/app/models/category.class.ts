import { BaseItem } from 'kentico-cloud-angular2-sdk';
import { TextField, NumberField, AssetsField } from 'kentico-cloud-angular2-sdk';

export class Category extends BaseItem {
  
  public categoryName: TextField;

  constructor() {
    super({
      resolver: (fieldName: string) => {
        if (fieldName === 'category_name') {
          return 'categoryName';
        }
      }
    })
  }
}

