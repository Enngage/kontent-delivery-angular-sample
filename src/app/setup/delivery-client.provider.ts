import { DeliveryClient, DeliveryClientConfig, TypeResolver } from 'kentico-cloud-delivery-typescript-sdk/_bundles';

import { Actor } from '../models/actor.class';
import { Movie } from '../models/movie.class';

export function DeliveryClientFactory() {

    const projectId = 'da5abe9f-fdad-4168-97cd-b3464be2ccb9';

    const typeResolvers: TypeResolver[] = [
        new TypeResolver('actor', () => new Actor()),
        new TypeResolver('movie', () => new Movie()),
    ];

    return new DeliveryClient(
        new DeliveryClientConfig(projectId, typeResolvers)
    );
}

export const DeliveryClientProvider = {
    provide: DeliveryClient,
    useFactory: DeliveryClientFactory,
    deps: []
};
