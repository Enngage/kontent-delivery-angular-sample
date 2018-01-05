import { Component, OnInit } from '@angular/core';
import {
  CloudError,
  ContentItem,
  ContentType,
  DeliveryClient,
  SortOrder,
  TaxonomyGroup,
} from 'kentico-cloud-delivery-typescript-sdk';

import { Actor } from './models/actor.class';
import { Movie } from './models/movie.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private readonly actorType = 'actor';
  private readonly movieType = 'movie';

  private readonly title = 'Kentico Cloud Delivery TypeScript/JavaScript SDK sample';

  private error?: string;

  private latestMovies?: Movie[];
  private actor?: Actor;
  private types?: ContentType[];
  private variousItems?: ContentItem[];
  private taxonomies?: TaxonomyGroup[];

  constructor(
    private deliveryClient: DeliveryClient
  ) { }

  ngOnInit(): void {
    // get 'top 3' latest movies
    this.deliveryClient.items<Movie>()
      .type(this.movieType)
      .limitParameter(3)
      .orderParameter('elements.title', SortOrder.desc)
      .get()
      .subscribe(response => {
        console.log(response);
        this.latestMovies = response.items;
      }, error => this.handleCloudError(error));

    // get single item of 'Character' type
    this.deliveryClient.item<Actor>('tom_hardy')
      .get()
      .subscribe(response => {
        console.log(response);
        this.actor = response.item;
      }, error => this.handleCloudError(error));

    // get any possible item
    this.deliveryClient.items<ContentItem>()
      .get()
      .subscribe(response => {
        console.log(response);
        this.variousItems = response.items;
      }, error => this.handleCloudError(error));

    // content types
    this.deliveryClient.types()
      .get()
      .subscribe(response => {
        console.log(response);
        this.types = response.types;
      }, error => this.handleCloudError(error));

    // taxonomies
    this.deliveryClient.taxonomies()
      .get()
      .subscribe(response => {
        console.log(response);
        this.taxonomies = response.taxonomies;
      }, error => this.handleCloudError(error));
  }

  private handleCloudError(error: CloudError | any): void {
    if (error instanceof CloudError) {
      this.error = `Kentico Cloud Error occured with message: '${error.message}' for request with id = '${error.request_id}'`;
    } else {
      this.error = 'Unknown error occured';
    }
  }

  private getTaxonomyTerms(taxonomy: TaxonomyGroup): string {
    return taxonomy.terms.map(term => term.name).join(', ');
  }
}
