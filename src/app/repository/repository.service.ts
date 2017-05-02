import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { MultipleResponse } from './multiple-response.class';
import { SingleResponse } from './single-response.class';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RepositoryService {

    private apiUrl = "https://deliver.kenticocloud.com";
    private projectId = "b52fa0db-84ec-4310-8f7c-3b94ed06644d";

    constructor(private http: Http) { }

    private getBaseUrl(): string {
        return this.apiUrl + "/" + this.projectId;
    }

    private addOptionsToUrl(url: string, options?: any): string {
        if (options) {
            let parameters = Object.getOwnPropertyNames(options).map((name) => encodeURIComponent(name) + "=" + encodeURIComponent(options[name]));
            if (parameters.length > 0) {
                if (url.indexOf('?') > -1){
                    url = url + "&";
                }
                else{
                    url = url + "?";
                }
                url = url + parameters.join("&");
            }
        }

        return url;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in "repository.service"', error);
        return Promise.reject(error.message || error);
    }

    getItems(type: string, options?: any): Promise<MultipleResponse> {
        var url = this.getBaseUrl() + "/items?system.type=" + type;

        url = this.addOptionsToUrl(url, options);

        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as MultipleResponse)
            .catch(this.handleError);
    }

    getItem(type: string, codename: string, options?: any): Promise<SingleResponse> {
        var url = this.getBaseUrl() + "/items/" + codename;

        url = this.addOptionsToUrl(url, options);

        return this.http.get(url)
            .toPromise()
            .then(response => (response.json() as SingleResponse))
            .catch(this.handleError);
    }

     getItemById(type: string, id: string,options?: any): Promise<SingleResponse> {
        var url = this.getBaseUrl() + "/items?system.type=" + type + "&system.id=" + id + "&limit=1";

        url = this.addOptionsToUrl(url, options);

        return this.http.get(url)
            .toPromise()
            .then(response => new SingleResponse(response.json().items[0], response.json().modular_content))
            .catch(this.handleError);
    }
}