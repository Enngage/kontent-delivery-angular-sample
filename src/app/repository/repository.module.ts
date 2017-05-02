import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RepositoryService } from './repository.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
    ],
    providers: [RepositoryService]
})
export class RepositoryModule { }