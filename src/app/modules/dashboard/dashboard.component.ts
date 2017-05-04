import { Component, Input, OnInit } from '@angular/core';
import { CodeExampleService } from '../../services/code-example/code-example.service';
import { CodeExample } from '../../services/code-example/code-example.class';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  public codeExamples: CodeExample[]; 

  constructor(
    private codeExampleService: CodeExampleService,
  ) { }

  ngOnInit(): void {
    this.codeExampleService.getItems()
    .then(codeExamples => this.codeExamples = codeExamples)
    .then(codeExamples => console.log(codeExamples))
    .then(codeExamples => this.testLog(this.codeExamples));
  }

  private testLog(codeExamples: CodeExample[]): void{
    codeExamples.forEach(codeExample => {
      console.log(codeExample["author"]);
      console.log(codeExample.author.name.text);
    });
  }
}