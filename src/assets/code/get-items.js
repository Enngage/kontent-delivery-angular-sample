 this.codeExampleService.getCodeExamples({ limit: 5 }).subscribe(response => {
      console.log(response);
      this.codeExamples = response.items;
    });