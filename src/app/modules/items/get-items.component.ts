import { Component, OnInit } from '@angular/core';

// services
import { KCloudService } from '../../kentico-cloud/services/kcloud.service';

// models
import { CodeExample } from '../../models/code-example.class';
import { MarkdownModule } from 'angular2-markdown';

@Component({
  templateUrl: 'get-items.component.html',
})
export class GetItemsComponent implements OnInit {

  private readonly type = "code_example";

  private codeExamples: CodeExample[];
  private codeExample: CodeExample;

  constructor(
    private kCloudService: KCloudService,
  ) {
  }

  ngOnInit(): void {
    this.kCloudService.getItems<CodeExample>(this.type, { limit: 5 }).subscribe(response => {
      console.log(response);
      this.codeExamples = response.items;
    });

    this.kCloudService.getItemByCodename<CodeExample>(this.type, 'changemacrorule_parameters').subscribe(response => {
      console.log(response);
      this.codeExample = response.item;
    });
  }
}