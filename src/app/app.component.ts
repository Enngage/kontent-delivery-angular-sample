import { ChangeDetectorRef, Component } from '@angular/core';
import {
  IDeliveryClient,
  createDeliveryClient,
  INetworkResponse,
  Responses,
  IGroupedNetworkResponse,
} from '@kentico/kontent-delivery';
import { AngularHttpService } from '@kentico/kontent-angular-http-service';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Observable, from } from 'rxjs';
import { observableHelper } from './helpers/observable.helper';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'kontent-angular-sample';

  deliveryClient: IDeliveryClient;

  itemsResponse?: INetworkResponse<Responses.IListContentItemsResponse, any>;
  itemResponse?: INetworkResponse<Responses.IViewContentItemResponse, any>;
  taxonomiesResponse?: INetworkResponse<Responses.IListTaxonomiesResponse, any>;
  taxonomyResponse?: INetworkResponse<Responses.IViewTaxonomyResponse, any>;
  typesResponse?: INetworkResponse<Responses.IListContentTypesResponse, any>;
  typeResponse?: INetworkResponse<Responses.IViewContentTypeResponse, any>;
  languagesResponse?: INetworkResponse<Responses.IListLanguagesResponse, any>;
  elementResponse?: INetworkResponse<
    Responses.IViewContentTypeElementResponse,
    any
  >;
  itemsFeedResponse?: IGroupedNetworkResponse<Responses.IListItemsFeedAllResponse>;

  constructor(httpClient: HttpClient, private cdr: ChangeDetectorRef) {
    this.deliveryClient = createDeliveryClient({
      projectId: 'da5abe9f-fdad-4168-97cd-b3464be2ccb9',
      httpService: new AngularHttpService(httpClient),
    });
  }

  ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    this.zipAndExecute([
      // items
      from(this.deliveryClient.items().depthParameter(2).toPromise()).pipe(
        map((response) => {
          this.itemsResponse = response;
          this.cdr.markForCheck();
        })
      ),
      // item
      from(
        this.deliveryClient.item('warrior').depthParameter(2).toPromise()
      ).pipe(
        map((response) => {
          this.itemResponse = response;
          this.cdr.markForCheck();
        })
      ),
      // taxonomies
      from(this.deliveryClient.taxonomies().toPromise()).pipe(
        map((response) => {
          this.taxonomiesResponse = response;
          this.cdr.markForCheck();
        })
      ),
      // taxonomy
      from(this.deliveryClient.taxonomy('movietype').toPromise()).pipe(
        map((response) => {
          this.taxonomyResponse = response;
          this.cdr.markForCheck();
        })
      ),
      // types
      from(this.deliveryClient.types().toPromise()).pipe(
        map((response) => {
          this.typesResponse = response;
          this.cdr.markForCheck();
        })
      ),
      // type
      from(this.deliveryClient.type('movie').toPromise()).pipe(
        map((response) => {
          this.typeResponse = response;
          this.cdr.markForCheck();
        })
      ),
      // languages
      from(this.deliveryClient.languages().toPromise()).pipe(
        map((response) => {
          this.languagesResponse = response;
          this.cdr.markForCheck();
        })
      ),
      // element
      from(this.deliveryClient.element('movie', 'title').toPromise()).pipe(
        map((response) => {
          this.elementResponse = response;
          this.cdr.markForCheck();
        })
      ),
      // items feed
      from(this.deliveryClient.itemsFeed().toAllPromise()).pipe(
        map((response) => {
          this.itemsFeedResponse = response;
          this.cdr.markForCheck();
        })
      ),
    ]);
  }

  private zipAndExecute(observables: Observable<void>[]): void {
    observableHelper
      .zipObservables(observables)
      .pipe(
        map(() => {
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }
}
