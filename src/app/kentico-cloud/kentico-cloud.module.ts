// core
import { NgModule } from '@angular/core';

// services
import { ItemMapService } from './services/item-map.service';
import { FieldMapService } from './services/field-map.service';
import { KCloudService } from './services/kcloud.service';


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