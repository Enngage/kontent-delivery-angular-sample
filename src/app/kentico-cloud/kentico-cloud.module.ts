import { NgModule } from '@angular/core';
import { KenticoCloudService } from './services/kentico-cloud.service';
import { KenticoCloudItemsService } from './services/kentico-cloud-items.service';

@NgModule({
    imports: [
    ],
    declarations: [
    ],
    providers: [
        KenticoCloudService, 
        KenticoCloudItemsService
        ],
})
export class KenticoCloudModule { }