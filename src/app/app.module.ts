import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// kentico cloud
import { DeliveryClientProvider } from './setup/delivery-client.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DeliveryClientProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
