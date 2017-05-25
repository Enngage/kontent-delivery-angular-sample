import { Injectable } from '@angular/core';
import { FieldMapService } from './field-map.service';
import { IModularContent } from '../interfaces/imodular-content.interface';
import { IItem } from '../interfaces/iitem.interface';
import { ResponseSingle } from '../responses/response-single.class';
import { ResponseMultiple } from '../responses/response-multiple.class';
import { TextField } from '../fields/field-types';
import { IField } from '../interfaces/ifield.interface';
import { FieldType } from '../fields/field-type';
import { ICloudResponseSingle } from '../cloud-responses/cloud-response-single.interface';
import { ICloudResponseMultiple } from '../cloud-responses/cloud-response-multiple.interface';
import { TypeResolver } from '../models/type-resolver.class';
import { TypeResolverService } from './type-resolver.service';

export class ItemMapService {

    private fieldMapService: FieldMapService;

    constructor(
        private typeResolvers: TypeResolver[]
    ) {
        this.fieldMapService = new FieldMapService(new TypeResolverService(typeResolvers));
    }

    private mapItem<TItem extends IItem>(item: IItem, modularContent: any): TItem {
        if (!item) {
            return null;
        }

        return this.fieldMapService.mapFields(item, modularContent);
    }

    mapSingleItem<TItem extends IItem>(response: ICloudResponseSingle): TItem {
        return this.mapItem<TItem>(response.item, response.modular_content);
    }

    mapMultipleItems<TItem extends IItem>(response: ICloudResponseMultiple): TItem[] {
        var that = this;
        return response.items.map(function (item) {
            return that.mapItem<TItem>(item, response.modular_content);
        });
    }
}