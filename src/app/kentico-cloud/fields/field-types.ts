import { FieldType } from './field-type';
import { IField } from '../interfaces/ifield.interface';

export class ModularContent<T> implements IField {
    constructor(
        public name: string,
        public type: FieldType,
        public value: any
    ) {};

    public item: T;
}

export class TextField implements IField {
    constructor(
        public name: string,
        public type: FieldType,
        public value: any
    ) {};

    public text = this.value;
}

