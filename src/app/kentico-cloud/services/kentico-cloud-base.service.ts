import { Injectable } from '@angular/core';
import { KenticoCloudService } from './kentico-cloud.service';
import { IItem } from '../interfaces/iitem.interface';
import { ResponseSingle } from '../responses/response-single.class';
import { ResponseMultiple } from '../responses/response-multiple.class';

@Injectable()
export class KenticoCloudBaseService<T extends IItem>  {

    constructor(protected kenticoCloudService: KenticoCloudService, public type: string) { }

    protected mapItem(item: any): T {
        if (!item) {
            return null;
        }

        return item as T;
    }

    protected mapSingle(response: ResponseSingle): T {
        return this.mapItem(response.item);
    }

    protected mapMultiple(response: ResponseMultiple): T[] {
        var that = this;
        return response.items.map(function (item) {
            return that.mapItem(item);
        });
    }

    getItems(options?: any): Promise<T[]> {
        return this.kenticoCloudService.getItems(this.type, options).then(response => this.mapMultiple(response));
    }

    getItemByCodename(codename: string, options?: any): Promise<T> {
        return this.kenticoCloudService.getItemByCodeName(this.type, codename, options).then(response => this.mapSingle(response));
    }

    getItemById(id: string, options?: any): Promise<T> {
        return this.kenticoCloudService.getItemById(this.type, id, options).then(response => this.mapSingle(response));
    }
}