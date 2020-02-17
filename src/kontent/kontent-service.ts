import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDeliveryClient, DeliveryClient, TypeResolver } from '@kentico/kontent-delivery';
import { Actor } from './models/actor';
import { Movie } from './models/movie';

@Injectable({
    providedIn: 'root'
})
export class KontentService {

    public deliveryClient: IDeliveryClient;

    constructor() {
        this.deliveryClient = new DeliveryClient({
            projectId: environment.kontent.deliveryProjectId,
            typeResolvers: [
                new TypeResolver('actor', () => new Actor()),
                new TypeResolver('movie', () => new Movie()),
            ]
        })
    }
}
