import { TypeResolver } from '../models/type-resolver.class';

export class KCloudConfig {
    public option1?: string;

    constructor(
        public apiEndpoint: string,
        public projectId: string,
        public typeResolvers: TypeResolver[],
        public options?: {
            option1?: string
        }) {
        if (options) Object.assign(this, options);
    }
}