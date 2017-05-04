export class FieldType {
    constructor(public type: string) {
    }

    toString() {
        return this.type;
    }

    static text = new FieldType("text");
    static modular_content = new FieldType("modular_content");
}