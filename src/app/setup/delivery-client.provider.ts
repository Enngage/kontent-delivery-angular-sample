import { DeliveryClient, TypeResolver } from 'kentico-cloud-delivery';

import { Actor } from '../models/actor.class';
import { Movie } from '../models/movie.class';

export function DeliveryClientFactory() {

    return new DeliveryClient({
        projectId: 'da5abe9f-fdad-4168-97cd-b3464be2ccb9',
        typeResolvers: [
            new TypeResolver('actor', () => new Actor()),
            new TypeResolver('movie', () => new Movie()),
        ]
    });
}

export const DeliveryClientProvider = {
    provide: DeliveryClient,
    useFactory: DeliveryClientFactory,
    deps: []
};
