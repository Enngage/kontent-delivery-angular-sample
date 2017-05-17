import { FieldType } from './field-type';
import { IField } from '../interfaces/ifield.interface';
import { AssetModel } from './field-models';

export class TextField implements IField {
    constructor(
        public name: string,
        public type: FieldType,
        public value: any
    ) { };

    public text = this.value;
}


export class AssetsField implements IField {
    constructor(
        public name: string,
        public type: FieldType,
        public value: any
    ) { };

    public assets = this.value as AssetModel[];
}
