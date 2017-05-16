import { Injectable } from '@angular/core';
import { CodeExample } from './code-example.class';
import { ISystem } from '../../kentico-cloud/interfaces/isystem.interface';
import { IItem } from '../../kentico-cloud/interfaces/iitem.interface';
import { KCloudService } from '../../kentico-cloud/services/kcloud.service';
import { Observable } from 'rxjs/Observable';
import { ResponseSingle } from '../../kentico-cloud/responses/response-single.class';
import { ResponseMultiple } from '../../kentico-cloud/responses/response-multiple.class';

@Injectable()
export class CodeExampleService{

    private readonly type = "code_example";

    constructor(protected kCloudService: KCloudService) { }

    getCodeExamples(options?: any): Observable<ResponseMultiple<CodeExample>> {
        return this.kCloudService.getItems<CodeExample>(this.type, options);
    }
}