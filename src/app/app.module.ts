import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
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
