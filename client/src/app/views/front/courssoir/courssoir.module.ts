import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourssoirRoutingModule } from './courssoir-routing.module';
import { CourssoirComponent } from './courssoir/courssoir.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CourssoirComponent
  ],
  imports: [
    CommonModule,
    CourssoirRoutingModule,
    FormsModule
  ]
})
export class CourssoirModule { }
