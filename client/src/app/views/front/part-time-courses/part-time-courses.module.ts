import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartTimeCoursesRoutingModule } from './part-time-courses-routing.module';
import { PartTimeCoursesComponent } from './part-time-courses/part-time-courses.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PartTimeCoursesComponent
  ],
  imports: [
    CommonModule,
    PartTimeCoursesRoutingModule,
    FormsModule
  ]
})
export class PartTimeCoursesModule { }
