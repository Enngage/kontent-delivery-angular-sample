
export class BaseField {
    name: string;
    type: string;
    value: any;
}

export class TextField extends BaseField {
    constructor(
        public name: string,
        public type: string,
        public text: string
    ) { super()};
}