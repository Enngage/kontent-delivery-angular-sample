import { Component, Input, OnInit } from '@angular/core';
import { CodeExampleService } from '../../services/code-example/code-example.service';
import { CodeExample } from '../../services/code-example/code-example.class';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  public codeExamples: CodeExample[];
  public codeExample: CodeExample;

  constructor(
    private codeExampleService: CodeExampleService,
  ) { }

  ngOnInit(): void {
    this.codeExampleService.getCodeExamples({ limit: 1 }).subscribe(response => {
      console.log(response);
      this.codeExamples = response.items;
    });

    this.codeExampleService.getCodeExampleByCodename('changemacrorule_parameters').subscribe(response => {
      console.log(response);
      this.codeExample = response.item
    });
  }
}