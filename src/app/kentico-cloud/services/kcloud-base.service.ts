import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { ResponseSingle } from '../responses/response-single.class';
import { ResponseMultiple } from '../responses/response-multiple.class';
import { CloudResponseSingle } from '../cloud-responses/cloud-response-single.class';
import { CloudResponseMultiple } from '../cloud-responses/cloud-response-multiple.class';
import { IItem } from '../interfaces/iitem.interface';
import { ItemMapService } from './item-map.service';
import { Observable } from 'rxjs/Observable';
// config
import { KCloudConfig } from '../config/kcloud.config';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export abstract class KCloudBaseService {

    constructor(
        protected http: Http,
        protected itemMapService: ItemMapService,
        protected config: KCloudConfig
    ) { }

    private getBaseUrl(): string {
        return this.config.apiEndpoint + '/' + this.config.projectId;
    }

    private addOptionsToUrl(url: string, options?: any): string {
        if (options) {
            let parameters = Object.getOwnPropertyNames(options).map((name) => encodeURIComponent(name) + "=" + encodeURIComponent(options[name]));
            if (parameters.length > 0) {
                if (url.indexOf('?') > -1) {
                    url = url + '&';
                }
                else {
                    url = url + '?';
                }
                url = url + parameters.join('&');
            }
        }

        return url;
    }

    private handleError(error: Response | any): Observable<any> {
        var errMsg: string;

        if (error instanceof Response) {
            errMsg = `$Kentico Cloud service error: ${error.status} - ${error.statusText || ''} ${error}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        return Observable.throw(errMsg);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body || {};
    }

    protected getMultipleResponse<TItem extends IItem<TItem>>(response: Response): ResponseMultiple<TItem> {
        var responseMultiple = (response.json() || {}) as CloudResponseMultiple<TItem>;

        // map items
        var items = this.itemMapService.mapMultipleItems<TItem>(responseMultiple);

        return new ResponseMultiple(items, responseMultiple.pagination);
    }

    protected getSingleItem<TItem extends IItem<TItem>>(type: string, action: string, options?: any): Observable<ResponseSingle<TItem>> {
        var url = this.getBaseUrl() + action;

        url = this.addOptionsToUrl(url, options);

        return this.http.get(url)
            .map(response => this.extractData(response) as ResponseSingle<TItem>)
            .catch(response => {
                return this.handleError(response);
            });
    }

    protected getMultipleItems<TItem extends IItem<TItem>>(type: string, action: string, options?: any): Observable<ResponseMultiple<TItem>> {
        var url = this.getBaseUrl() + action;
        var that = this;

        url = this.addOptionsToUrl(url, options);

        return this.http.get(url)
            .map(response => {
                return this.getMultipleResponse(response)
            })
            .catch(response => {
                return this.handleError(response);
            });
    }
}