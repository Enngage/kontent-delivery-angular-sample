export class KCloudConfig {

    public option1: string;

    constructor(
        public apiEndpoint: string,
        public projectId: string,
        public options?: {
            option1?: string
        }) {
        if (options) Object.assign(this, options);
    }
}