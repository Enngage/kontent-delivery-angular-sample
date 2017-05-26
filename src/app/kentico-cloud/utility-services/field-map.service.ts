import { Injectable } from '@angular/core';
import { IModularContent } from '../interfaces/imodular-content.interface';
import { IItem } from '../interfaces/iitem.interface';
import { ResponseSingle, ResponseMultiple } from '../models/responses';
import { TextField, AssetsField, NumberField } from '../fields/field-types';
import { IField } from '../interfaces/ifield.interface';
import { FieldType } from '../fields/field-type';
import { TypeResolver } from '../models/type-resolver.class';
import { TypeResolverService } from './type-resolver.service';

export class FieldMapService {

    constructor(
        private typeResolverService: TypeResolverService,
    ) {
    }

    mapFields(item: IItem, modularContent: any): any {
        var properties = Object.getOwnPropertyNames(item.elements);

        // create typed item
        var itemTyped = this.typeResolverService.createTypedObj(item.system.type, item);

        properties.forEach(fieldName => {
            var field = item.elements[fieldName] as IField;
            var propertyName;

            // resolve value into a different 'property'
            if (itemTyped.resolver){
                propertyName = itemTyped.resolver(fieldName);
            }
            else{
                propertyName = fieldName;
            }

            itemTyped[propertyName] = this.mapField(field, modularContent);
        });

        return itemTyped;
    }

    private mapField(field: IField, modularContent: any): any {
        if (field.type.toString() === FieldType.modular_content.toString()) {
            return this.mapModularField(field, modularContent);
        }
        else if (field.type.toString() === FieldType.text.toString()) {
            return this.mapTextField(field);
        }
        else if (field.type.toString() === FieldType.asset.toString()) {
            return this.mapAssetsField(field);
        }
        else if (field.type.toString() === FieldType.number.toString()) {
            return this.mapNumberField(field);
        }
        else {
            console.log(`Unsupported field type '${field.type}'`);
            //throw Error(`Unsupported field type '${field.type}'`)
        }
    }

    private mapNumberField(field: IField): NumberField {
        return new NumberField(field.name, field.type, field.value);
    }

    private mapTextField(field: IField): TextField {
        return new TextField(field.name, field.type, field.value);
    }

    private mapAssetsField(field: IField): AssetsField {
        return new AssetsField(field.name, field.type, field.value);
    }

    private mapModularField(field: IField, modularContent: any): any {
        var modularItem = modularContent[field.value[0]];

        return this.mapFields(modularItem, modularContent);
    }
}