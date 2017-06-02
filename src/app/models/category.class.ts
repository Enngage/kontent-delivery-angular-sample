import { ContentItem, TextField } from 'kentico-cloud-delivery-typescript-sdk';

export class Category extends ContentItem {
  
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

