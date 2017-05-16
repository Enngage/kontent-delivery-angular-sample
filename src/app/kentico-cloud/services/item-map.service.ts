import { Injectable } from '@angular/core';
import { FieldMapService } from './field-map.service';
import { IModularContent } from '../interfaces/imodular-content.interface';
import { IItem } from '../interfaces/iitem.interface';
import { ResponseSingle } from '../responses/response-single.class';
import { ResponseMultiple } from '../responses/response-multiple.class';
import { IField, TextField } from '../fields/field-types';
import { FieldType } from '../fields/field-type.class';
import { CloudResponseSingle } from '../cloud-responses/cloud-response-single.class';
import { CloudResponseMultiple } from '../cloud-responses/cloud-response-multiple.class';

@Injectable()
export class ItemMapService {

    protected fieldMapService = new FieldMapService();

    constructor() { }

    mapSingleItem<TItem extends IItem<TItem>>(response: CloudResponseSingle<TItem>): TItem {
        return this.mapItem(response.item, response.modular_content);
    }

    mapMultipleItems<TItem extends IItem<TItem>>(response: CloudResponseMultiple<TItem>): TItem[] {
        var that = this;
        return response.items.map(function (item) {
            return that.mapItem(item, response.modular_content);
        });
    }

    private mapItem<TItem extends IItem<TItem>>(item: IItem<TItem>, modularContent: any): TItem {
        if (!item) {
            return null;
        }
        return this.fieldMapService.getFields<TItem>(item, modularContent);
    }
}