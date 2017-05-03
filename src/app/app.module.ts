// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// main module
import { AppComponent } from './app.component';

// main components
import { NotFoundComponent } from './modules/shared/not-found.component';

// kentico cloud
import { KenticoCloudModule } from './kentico-cloud/kentico-cloud.module';

// custom modules
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    // Default routes
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dash', pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]),

    // angular modules
    BrowserModule,
    FormsModule,
    HttpModule,

    // kentico cloud
    KenticoCloudModule,

    // Custom modules
    DashboardModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
