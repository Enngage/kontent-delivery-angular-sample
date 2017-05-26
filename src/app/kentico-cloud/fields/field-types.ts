import { FieldType } from './field-type';
import { IField } from '../interfaces/ifield.interface';
import { IAsset } from './field-interfaces';
import { AssetModel } from './field-models';

export class TextField implements IField {
    constructor(
        public name: string,
        public type: FieldType,
        public value: string
    ) { };

    public text = this.value;
}

export class NumberField implements IField {
    constructor(
        public name: string,
        public type: FieldType,
        public value: number
    ) { };

    public number = this.value;
}

export class AssetsField implements IField {

    public assets: AssetModel[] = [];

    constructor(
        public name: string,
        public type: FieldType,
        public value: any
    ) { 
        if (this.value){
            if (Array.isArray(this.value)){
                this.value.forEach(asset => {
                    var assetTemp = asset as IAsset;
                    this.assets.push(new AssetModel(
                        assetTemp.name,
                        assetTemp.type,
                        assetTemp.size,
                        assetTemp.description,
                        assetTemp.url
                    ));
                });
            }
        }
    };
}
