import { Injectable } from '@angular/core';
import { KenticoCloudService } from './kentico-cloud.service';
import { IModularContent } from '../interfaces/imodular-content.interface';
import { IItem } from '../interfaces/iitem.interface';
import { IItemRaw } from '../interfaces/iitem-raw.interface';
import { ResponseSingle } from '../responses/response-single.class';
import { ResponseMultiple } from '../responses/response-multiple.class';
import { IField, TextField } from '../fields/field-types';
import { FieldType } from '../fields/field-type.class';

@Injectable()
export class KenticoCloudItemsService<T extends IItem<T>>  {

    constructor(protected kenticoCloudService: KenticoCloudService, public type: string) { }

    protected mapItem(item: any, modularContent: any): T {
        if (!item) {
            return null;
        }

        // get raw item response
        var itemRaw = item as IItemRaw;

        // go through all properties and create proper field types
        var properties = Object.getOwnPropertyNames(itemRaw.elements);
        properties.forEach(field => {
            var baseField = itemRaw.elements[field] as IField;

            // process known fields
            if (baseField.type.toString() === FieldType.text.toString()) {
                //  text field
                item[field] = new TextField(baseField.name, baseField.type, baseField.value);
            }
            else if (baseField.type.toString() === FieldType.modular_content.toString()) {
                // modular content field

                // get modular item
                var modularContentItem = modularContent[itemRaw.elements[field].value[0]] as IItemRaw;
                var properties2 = Object.getOwnPropertyNames(modularContentItem.elements);
                properties2.forEach(property => {
                    var baseField2 = modularContentItem.elements[property] as IField;
                    if (baseField2.type.toString() === FieldType.text.toString()) {
                        //  text field
                        modularContentItem[property] = new TextField(baseField2.name, baseField2.type, baseField2.value);
                    }
                });

                item[field] = modularContentItem as IItemRaw;
            }
            else {
                // Enable later on
                //throw Error('Unsupported field type "' + baseField.type + '"')
            }
        });

        return item as T;
    }

    protected mapSingle(response: ResponseSingle<T>): T {
        return this.mapItem(response.item, response.modular_content);
    }

    protected mapMultiple(response: ResponseMultiple<T>): T[] {
        var that = this;
        return response.items.map(function (item) {
            return that.mapItem(item, response.modular_content);
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