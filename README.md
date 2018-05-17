This is an example Angular 6 application with [Kentico Cloud Delivery SDK](https://github.com/Enngage/kentico-cloud-js)

## Angular 6 support

Currently, there is an issue with Angular 6 CLI as it statically tries to resolve all requires. Since `Kentico Cloud Delivery` supports both `node` and `browsers` the build fails in Angular 6 application due to missing node.js API. To get around this, add following to your `ts.config.json` file:

```
"paths": {
    "kentico-cloud-delivery": [
        "node_modules/kentico-cloud-delivery/_bundles/kentico-cloud-delivery-sdk.browser.umd.min.js"
    ]
},
```

The path may differ depending on the configuration of your `BaseUrl`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Stackblitz demo (old) (Angular 5 & SDK 3.x)

Head over to the [Live demo on Stackblitz](https://stackblitz.com/edit/kentico-cloud-angular-5-demo) to explore the app directly in your browser.