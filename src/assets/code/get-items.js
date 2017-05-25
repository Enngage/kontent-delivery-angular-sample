this.kCloudService.getItems<CodeExample>('code_example', { limit: 5 }).subscribe(response => {
      console.log(response);
    });