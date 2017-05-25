import { Component, OnInit } from '@angular/core';

// services
import { KCloudService } from '../../kentico-cloud/services/kcloud.service';

// models
import { CodeExample } from '../../models/code-example.class';
import { Limit, Order, Depth, Elements, Skip } from '../../kentico-cloud/models/options';

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
    this.kCloudService.getItems<CodeExample>(this.type, [
      new Limit(5), 
      new Skip(1),
      new Depth(5),
      new Elements(["title", "author", "category", "image", "name", "category_name"]),
      new Order("elements.title[asc]")
      ]).subscribe(response => {
        console.log(response);
        this.codeExamples = response.items;
    });

    this.kCloudService.getItemByCodename<CodeExample>(this.type, 'changemacrorule_parameters').subscribe(response => {
      console.log(response);
      this.codeExample = response.item;
    });
  }
}