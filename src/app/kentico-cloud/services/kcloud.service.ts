// core
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// config
import { KCloudConfig } from '../config/kcloud.config';

// models
import { ResponseSingle } from '../responses/response-single.class';
import { ResponseMultiple } from '../responses/response-multiple.class';
import { IItem } from '../interfaces/iitem.interface';

// services
import { ItemMapService } from './item-map.service';
import { KCloudBaseService } from './kcloud-base.service';

@Injectable()
export class KCloudService extends KCloudBaseService {

    constructor(
        protected http: Http,
        protected itemMapService: ItemMapService,
        protected config: KCloudConfig
    ) { super(http, itemMapService, config) }

    getItems<TItem extends IItem>(type: string, options?: any): Observable<ResponseMultiple<TItem>> {
        var action = '/items?system.type=' + type;

        return this.getMultipleItems(type, action, options);
    }

    getItemByCodename<TItem extends IItem>(type: string, codename: string, options?: any): Observable<ResponseSingle<TItem>> {
        var action = '/items/' + codename;

        return this.getSingleItem(type, action, options);
    }

    getItemById<TItem extends IItem>(type: string, id: string, options?: any): Observable<ResponseSingle<TItem>> {
        var action = '/items?system.type=' + type + '&system.id=' + id + '&limit=1';

        return this.getSingleItem(type, action, options);
    }
}