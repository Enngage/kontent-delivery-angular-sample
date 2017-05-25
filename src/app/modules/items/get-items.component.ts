import { Component, Input, OnInit } from '@angular/core';
import { CodeExampleService } from '../../services/code-example/code-example.service';
import { CodeExample } from '../../services/code-example/code-example.class';
import { ResponseSingle } from '../../kentico-cloud/responses/response-single.class';
import { MarkdownModule } from 'angular2-markdown';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'get-items.component.html',
})
export class GetItemsComponent implements OnInit {

  private codeExamples: CodeExample[];
  private codeExample: CodeExample;

  constructor(
    private codeExampleService: CodeExampleService,
  ) {
  }

  ngOnInit(): void {
    this.codeExampleService.getCodeExamples({ limit: 5 }).subscribe(response => {
      console.log(response);
      this.codeExamples = response.items;
    });

    this.codeExampleService.getCodeExampleByCodename('changemacrorule_parameters').subscribe(response => {
      console.log(response);
      this.codeExample = response.item;

      if (response instanceof ResponseSingle) {
        console.log("is single response type")
      }
      else {
        console.log("not single response type");
      }
      if (response.item instanceof CodeExample) {
        console.log("is code example type");
      }
      else {
        console.log("not code example type");
      }

      //response.item.testCodeExampleMethod();
    });
  }
}