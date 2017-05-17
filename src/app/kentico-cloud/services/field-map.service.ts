import { Injectable } from '@angular/core';
import { IModularContent } from '../interfaces/imodular-content.interface';
import { IItem } from '../interfaces/iitem.interface';
import { ResponseSingle } from '../responses/response-single.class';
import { ResponseMultiple } from '../responses/response-multiple.class';
import { TextField, AssetsField } from '../fields/field-types';
import { IField } from '../interfaces/ifield.interface';
import { FieldType } from '../fields/field-type';


@Injectable()
export class FieldMapService {

    constructor() { }

    getFields(item: IItem, modularContent: any): any {
        var properties = Object.getOwnPropertyNames(item.elements);

        properties.forEach(fieldName => {
            var field = item.elements[fieldName] as IField;
            item[fieldName] = this.getField(field, modularContent);
        });

        return item;
    }

    private getField(field: IField, modularContent: any): any {
        if (field.type.toString() === FieldType.modular_content.toString()) {
            return this.mapModularField(field, modularContent);
        }
        else if (field.type.toString() === FieldType.text.toString()) {
            return this.mapTextField(field);
        }
        else if (field.type.toString() === FieldType.asset.toString()) {
            return this.mapAssetsField(field);
        }
        else {
            console.log('Unsupported field type "' + field.type + '"');
            //throw Error('Unsupported field type "' + field.type + '"')
        }
    }

    private mapTextField(field: IField): TextField {
        return new TextField(field.name, field.type, field.value);
    }

    private mapAssetsField(field: IField): AssetsField {
        return new AssetsField(field.name, field.type, field.value);
    }

    private mapModularField(field: IField, modularContent: any): any {
        var modularItem = modularContent[field.value[0]];

        return this.getFields(modularItem, modularContent);
    }
}