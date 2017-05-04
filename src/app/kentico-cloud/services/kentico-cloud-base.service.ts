import { Injectable } from '@angular/core';
import { KenticoCloudService } from './kentico-cloud.service';
import { IItem } from '../interfaces/iitem.interface';
import { ResponseSingle } from '../responses/response-single.class';
import { ResponseMultiple } from '../responses/response-multiple.class';
import { BaseField, TextField } from '../fields/field-types';

@Injectable()
export class KenticoCloudBaseService<T extends IItem<T>>  {

    constructor(protected kenticoCloudService: KenticoCloudService, public type: string) { }

    protected mapItem(item: any): T {
        if (!item) {
            return null;
        }

        var test = item as T;
        console.log("item:", item, "elements:", test.elements)

        var properties =  Object.getOwnPropertyNames(test.elements);
        properties.forEach(field => {
            console.log(test.elements[field] as BaseField)

            var baseField = test.elements[field] as BaseField;
            if (baseField.type === 'text'){
                test[field] = new TextField(baseField.name, baseField.type, baseField.value as string);
            }
        });

        return item as T;
    }

    protected mapSingle(response: ResponseSingle<T>): T {
        return this.mapItem(response.item);
    }

    protected mapMultiple(response: ResponseMultiple<T>): T[] {
        var that = this;
        return response.items.map(function (item) {
            return that.mapItem(item);
        });
    }

    getItems(options?: any): Promise<T[]> {
        return this.kenticoCloudService.getItems<T>(this.type, options).then(response => this.mapMultiple(response));
    }

    getItemByCodename(codename: string, options?: any): Promise<T> {
        return this.kenticoCloudService.getItemByCodeName<T>(this.type, codename, options).then(response => this.mapSingle(response));
    }

    getItemById(id: string, options?: any): Promise<T> {
        return this.kenticoCloudService.getItemById<T>(this.type, id, options).then(response => this.mapSingle(response));
    }
}