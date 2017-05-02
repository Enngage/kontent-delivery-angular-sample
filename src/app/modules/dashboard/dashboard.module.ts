import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouter } from './dashboard.router';

@NgModule({
    imports: [
        DashboardRouter
    ],
    declarations: [
        DashboardComponent,
    ]
})
export class DashboardModule { }