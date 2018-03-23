import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk/_bundles';

import { Actor } from './actor.class';

export class Movie extends ContentItem {
  public title: Fields.TextField;
  public plot: Fields.RichTextField;
  public released: Fields.DateTimeField;
  public length: Fields.NumberField;
  public poster: Fields.AssetsField;
  public category: Fields.MultipleChoiceField;
  public stars: Actor[];

  constructor() {
    super({
      linkResolver: (link) => {
        return 'movies/' + link.url_slug;
      }
    });
  }

  getCategoriesText(): string {
    if (!this.category) {
      return null;
    }

    return this.category.options.map(m => m.name.toLocaleLowerCase()).join(', ');
  }

  getStarsText(): string {
    if (!this.stars) {
      return null;
    }
    return this.stars.map(actor => actor.getFullName()).join(', ');
  }
}

