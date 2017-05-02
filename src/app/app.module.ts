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

// custom modules
import { DashboardModule } from './modules/dashboard/dashboard.module';

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

    // Custom modules
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
