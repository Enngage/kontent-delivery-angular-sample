import { ContentItem, TextField, AssetsField } from 'kentico-cloud-delivery-typescript-sdk';

export class Actor extends ContentItem {
  public firstName: TextField;
  public lastName: TextField;
  public photo: AssetsField;

  constructor() {
    super({
      resolver: (fieldName: string) => {
        if (fieldName === 'firstname') {
          return 'firstName'; // binds 'firstname' response from Kentico cloud to 'firstName' property of this class
        }
        if (fieldName === 'lastname') {
          return 'lastName';
        }
      }
    })
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

