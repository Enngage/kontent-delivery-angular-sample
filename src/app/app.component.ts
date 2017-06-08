import { Component, OnInit } from '@angular/core';

import { DeliveryClient, LimitParameter, OrderParameter, SortOrder } from 'kentico-cloud-delivery-typescript-sdk';

import { Actor } from './models/actor.class';
import { Movie } from './models/movie.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private readonly actorType = 'actor';
  private readonly movieType = 'movie';

  private title = 'Kentico Cloud Angular';

  private latestMovies: Movie[];
  private actor: Actor[];

  constructor(
    private deliveryClient: DeliveryClient
  ) { }

  ngOnInit() {

    // get 'top 3' latest movies
    this.deliveryClient.getItems<Movie>(
      this.movieType,
      [
        new LimitParameter(3),
        new OrderParameter("elements.title", SortOrder.desc)
      ]).subscribe(response => {
        console.log(response);
        this.latestMovies = response.items;
      });

    // get single item of 'Character' type
    this.deliveryClient.getItem<Actor>('character', 'tom_hardy').subscribe(response => console.log(response));
  }
}
