// core
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';

// config
import { KCloudConfig } from '../kentico-cloud/config/kcloud.config';

// services
import { ItemMapService } from '../kentico-cloud/services/item-map.service';
import { FieldMapService } from '../kentico-cloud/services/field-map.service';
import { KCloudService } from '../kentico-cloud/services/kcloud.service';


let kCloudServiceFactory = (http: Http, itemMapService: ItemMapService) => {

    let apiUrl = 'https://deliver.kenticocloud.com';
    let projectId = 'b52fa0db-84ec-4310-8f7c-3b94ed06644d';

    return new KCloudService(
        http,
        itemMapService,
        new KCloudConfig(apiUrl, projectId)
    )
};

export let KCloudServiceProvider =
    {
        provide: KCloudService,
        useFactory: kCloudServiceFactory,
        deps: [Http, ItemMapService]
    };

@NgModule({
    imports: [
    ],
    declarations: [
    ],
    providers: [
        KCloudService,
        FieldMapService,
        ItemMapService
    ],
})
export class KenticoCloudModule { }