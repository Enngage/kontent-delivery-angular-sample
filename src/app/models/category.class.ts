import { BaseItem } from '../kentico-cloud/models/base-item.class';
import { TextField, NumberField, AssetsField } from '../kentico-cloud/fields/field-types';

export class Category extends BaseItem {

  public categoryName: TextField;

  constructor() {
    super({
      resolver: (fieldName: string) => {
        if (fieldName === 'category_name'){
          return 'categoryName';
        }
       }
    })
  }
}

