import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ResponseSingle } from '../responses/response-single.class';
import { ResponseMultiple } from '../responses/response-multiple.class';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KenticoCloudService {

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

    getItems<T>(type: string, options?: any): Promise<ResponseMultiple<T>> {
        var url = this.getBaseUrl() + "/items?system.type=" + type;

        url = this.addOptionsToUrl(url, options);

        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as ResponseMultiple<T>)
            .catch(this.handleError);
    }

    getItemByCodeName<T>(type: string, codename: string, options?: any): Promise<ResponseSingle<T>> {
        var url = this.getBaseUrl() + "/items/" + codename;

        url = this.addOptionsToUrl(url, options);

        return this.http.get(url)
            .toPromise()
            .then(response => (response.json() as ResponseSingle<T>))
            .catch(this.handleError);
    }

     getItemById<T>(type: string, id: string,options?: any): Promise<ResponseSingle<T>> {
        var url = this.getBaseUrl() + "/items?system.type=" + type + "&system.id=" + id + "&limit=1";

        url = this.addOptionsToUrl(url, options);

        return this.http.get(url)
            .toPromise()
            .then(response => new ResponseSingle<T>(response.json().items[0], response.json().modular_content))
            .catch(this.handleError);
    }
}