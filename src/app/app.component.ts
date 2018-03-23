import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CloudError,
  ContentItem,
  ContentType,
  DeliveryClient,
  SortOrder,
  TaxonomyGroup,
  DeliveryClientConfig,
} from 'kentico-cloud-delivery-typescript-sdk/_bundles';
import { Subject } from 'rxjs/Subject';

import { Actor } from './models/actor.class';
import { Movie } from './models/movie.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  /**
   * Important - used to unsubsribe ALL subscriptions when component is destroyed. This ensures that requests are cancelled
   * when navigating away from the component.
   * See for more details: https://stackoverflow.com/questions/38008334/angular-rxjs-when-should-i-unsubscribe-from-subscription
   * Usage: use 'takeUntil(this.ngUnsubscribe)' for all subscriptions.
   * Example: this.myThingService.getThings()
   *       .takeUntil(this.ngUnsubscribe)
   *      .subscribe(things => console.log(things));
   */
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  private readonly actorType = 'actor';
  private readonly movieType = 'movie';

  private readonly title = 'Kentico Cloud Delivery TypeScript/JavaScript SDK sample';

  private error?: string;

  private latestMovies?: Movie[];
  private actor?: Actor;
  private types?: ContentType[];
  private variousItems?: ContentItem[];
  private taxonomies?: TaxonomyGroup[];

  constructor( private deliveryClient: DeliveryClient) { }

  ngOnInit(): void {
    this.loadData();

  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  loadData(): void {
    this.deliveryClient
      .item<Movie>('warrior')
      .depthParameter(5)
      .get()
      .subscribe(response => {
        console.log(response);
        console.log(response.debug.rawResponse.response.modular_content['tom_hardy'].elements.first_name.value);
        console.log(response.item.stars[0].firstName.text);
      });
    // get 'top 3' latest movies
    this.deliveryClient
      .items<Movie>()
      .type(this.movieType)
      .limitParameter(3)
      .orderParameter('elements.title', SortOrder.desc)
      .get()
      //  .takeUntil(this.ngUnsubscribe)
      .subscribe(
        response => {
          console.log(response);
          this.latestMovies = response.items;
        },
        error => this.handleCloudError(error)
      );

    // get single item of 'Character' type
    this.deliveryClient
      .item<Actor>('tom_hardy')
      .get()
      //    .takeUntil(this.ngUnsubscribe)
      .subscribe(
        response => {
          console.log(response);
          this.actor = response.item;
        },
        error => this.handleCloudError(error)
      );

    // get any possible item
    this.deliveryClient
      .items<ContentItem>()
      .get()
      //  .takeUntil(this.ngUnsubscribe)
      .subscribe(
        response => {
          console.log(response);
          this.variousItems = response.items;
        },
        error => this.handleCloudError(error)
      );

    // content types
    this.deliveryClient
      .types()
      .get()
      //    .takeUntil(this.ngUnsubscribe)
      .subscribe(
        response => {
          console.log(response);
          this.types = response.types;
        },
        error => this.handleCloudError(error)
      );

    // taxonomies
    this.deliveryClient
      .taxonomies()
      .get()
      //   .takeUntil(this.ngUnsubscribe)
      .subscribe(
        response => {
          console.log(response);
          this.taxonomies = response.taxonomies;
        },
        error => this.handleCloudError(error)
      );
  }

  private handleCloudError(error: CloudError | any): void {
    if (error instanceof CloudError) {
      this.error = `Kentico Cloud Error occured with message: '${
        error.message
        }' for request with id = '${error.request_id}'`;
    } else {
      this.error = 'Unknown error occured';
    }
  }

  private getTaxonomyTerms(taxonomy: TaxonomyGroup): string {
    return taxonomy.terms.map(term => term.name).join(', ');
  }
}
