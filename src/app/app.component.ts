import { Component, OnInit } from '@angular/core';

import { DeliveryClient, LimitParameter, OrderParameter, SortOrder } from 'kentico-cloud-delivery-typescript-sdk';

import { Character } from './models/character.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kentico Cloud Angular';

  constructor(
    private deliveryClient: DeliveryClient
  ) { }

  ngOnInit() {
    // get 'top 10' latest modified items of all types 
    this.deliveryClient.getItems(null,
      [
        new LimitParameter(10),
        new OrderParameter("system.last_modified", SortOrder.desc)
      ]).subscribe(response => console.log(response));

    // get items of 'Character' type
    this.deliveryClient.getItems<Character>('character').subscribe(response => console.log(response));

    // get single item of 'Character' type
    this.deliveryClient.getItem<Character>('character', 'rimmer').subscribe(response => console.log(response));
  }
}
