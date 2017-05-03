import { Component, Input, OnInit } from '@angular/core';
import { CodeExampleService } from '../../services/code-example/code-example.service';
import { CodeExample } from '../../services/code-example/code-example.class';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  private codeExamples: CodeExample[]; 

  constructor(
    private codeExampleService: CodeExampleService,
  ) { }

  ngOnInit(): void {
    this.codeExampleService.getItems().then(codeExamples => this.codeExamples = codeExamples);
    console.log(this.codeExamples);
  }
}