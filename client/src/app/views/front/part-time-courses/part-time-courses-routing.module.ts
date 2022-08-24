import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartTimeCoursesComponent } from './part-time-courses/part-time-courses.component';

const routes: Routes = [
  {path:'',component:PartTimeCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartTimeCoursesRoutingModule { }
