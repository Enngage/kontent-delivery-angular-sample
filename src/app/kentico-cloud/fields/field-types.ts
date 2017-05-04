import { FieldType } from './field-type.class';

export interface IField {
    name: string;
    type: FieldType;
    value: any;
}

export class TextField implements IField {
    constructor(
        public name: string,
        public type: FieldType,
        public value: any
    ) {};

    public text = this.value;
}

export class ModularContent<T> implements IField {
    constructor(
        public name: string,
        public type: FieldType,
        public value: any
    ) {};

    public item: T;
}