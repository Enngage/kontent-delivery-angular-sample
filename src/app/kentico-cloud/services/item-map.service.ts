import { Injectable } from '@angular/core';
import { FieldMapService } from './field-map.service';
import { IModularContent } from '../interfaces/imodular-content.interface';
import { IItem } from '../interfaces/iitem.interface';
import { ResponseSingle } from '../responses/response-single.class';
import { ResponseMultiple } from '../responses/response-multiple.class';
import { TextField } from '../fields/field-types';
import { IField } from '../interfaces/ifield.interface';
import { FieldType } from '../fields/field-type';
import { CloudResponseSingle } from '../cloud-responses/cloud-response-single.class';
import { CloudResponseMultiple } from '../cloud-responses/cloud-response-multiple.class';

@Injectable()
export class ItemMapService {

    protected fieldMapService = new FieldMapService();

    constructor() { }

    private mapItem<TItem extends IItem>(item: IItem, modularContent: any): TItem {
        if (!item) {
            return null;
        }
        return this.fieldMapService.getFields(item, modularContent);
    }

    mapSingleItem<TItem extends IItem>(response: CloudResponseSingle<IItem>): TItem {
        return this.mapItem<TItem>(response.item, response.modular_content);
    }

    mapMultipleItems<TItem extends IItem>(response: CloudResponseMultiple<IItem>): TItem[] {
        var that = this;
        return response.items.map(function (item) {
            return that.mapItem<TItem>(item, response.modular_content);
        });
    }
}