import { NgModule } from '@angular/core';
import { KenticoCloudService } from './services/kentico-cloud.service';
import { KenticoCloudBaseService } from './services/kentico-cloud-base.service';

@NgModule({
    imports: [
    ],
    declarations: [
    ],
    providers: [
        KenticoCloudService, 
        KenticoCloudBaseService
        ],
})
export class KenticoCloudModule { }