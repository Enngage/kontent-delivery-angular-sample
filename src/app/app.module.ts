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
import { KCloudServiceProvider } from './setup/kcloud.service.provider';
import { KCloudService } from './kentico-cloud/services/kcloud.service';

// custom modules
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ItemsModule } from './modules/items/items.module';

// angular2 markdown
import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    // default routes
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

    // markdown
    MarkdownModule.forRoot(),

    // angular modules
    BrowserModule,
    FormsModule,
    HttpModule,

    // kentico cloud
    KenticoCloudModule,

    // Custom modules
    DashboardModule,
    ItemsModule
  ],
  providers: [
    KCloudServiceProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
