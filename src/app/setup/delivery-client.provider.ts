// kentico cloud
import { DeliveryClient, DeliveryClientConfig, TypeResolver } from 'kentico-cloud-delivery-typescript-sdk';

// models
import { Actor } from '../models/actor.class';
import { Movie } from '../models/movie.class';

export function DeliveryClientFactory() {

    let apiUrl = 'https://deliver.kenticocloud.com';
    let projectId = 'da5abe9f-fdad-4168-97cd-b3464be2ccb9';

    let typeResolvers: TypeResolver[] = [
        new TypeResolver("actor", () => new Actor()),
        new TypeResolver("movie", () => new Movie()),
    ];

    return new DeliveryClient(
        new DeliveryClientConfig(apiUrl, projectId, typeResolvers)
    )
};

export var DeliveryClientProvider =
    {
        provide: DeliveryClient,
        useFactory: DeliveryClientFactory,
        deps: []
    };
