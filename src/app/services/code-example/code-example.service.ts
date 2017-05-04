import { Injectable } from '@angular/core';
import { CodeExample } from './code-example.class';
import { ISystem } from '../../kentico-cloud/interfaces/isystem.interface';
import { IItem } from '../../kentico-cloud/interfaces/iitem.interface';
import { KenticoCloudItemsService } from '../../kentico-cloud/services/kentico-cloud-items.service';
import { KenticoCloudService } from '../../kentico-cloud/services/kentico-cloud.service';

@Injectable()
export class CodeExampleService extends KenticoCloudItemsService<CodeExample> {

    constructor(protected kenticoCloudService: KenticoCloudService) { super (kenticoCloudService, "code_example")}

}