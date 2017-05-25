import { IOption } from '../interfaces/ioption.interface';


export class Elements implements IOption {

    constructor(
        public elementCodenames: string[]
    ) { }

    public GetParam(): string {
        return 'elements';
    }

    public GetParamValue(): string {
        if (!this.elementCodenames){
            return null;
        }

        return this.elementCodenames.map(m => m.trim()).join();
    }
}

export class Limit implements IOption {

    constructor(
        public limit: number
    ) { }

    public GetParam(): string {
        return 'limit';
    }

    public GetParamValue(): string {
        return this.limit.toString();
    }
}

export class Skip implements IOption {

    constructor(
        public skip: number
    ) { }

    public GetParam(): string {
        return 'skip';
    }

    public GetParamValue(): string {
        return this.skip.toString();
    }
}

export class Order implements IOption {

    constructor(
        public order: string
    ) { }

    public GetParam(): string {
        return 'order';
    }

    public GetParamValue(): string {
        return this.order.toString();
    }
}

export class Depth implements IOption {

    constructor(
        public depth: number
    ) { }

    public GetParam(): string {
        return 'depth';
    }

    public GetParamValue(): string {
        return this.depth.toString();
    }
}

