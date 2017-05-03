import { Injectable } from '@angular/core';
import { CodeExample } from './code-example.class';
import { ISystem } from '../../kentico-cloud/interfaces/isystem.interface';
import { IItem } from '../../kentico-cloud/interfaces/iitem.interface';
import { KenticoCloudBaseService } from '../../kentico-cloud/services/kentico-cloud-base.service';
import { KenticoCloudService } from '../../kentico-cloud/services/kentico-cloud.service';

@Injectable()
export class CodeExampleService extends KenticoCloudBaseService<CodeExample> {

    constructor(protected kenticoCloudService: KenticoCloudService) { super (kenticoCloudService, "code_example")}

}