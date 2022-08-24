import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourssoirComponent } from './courssoir/courssoir.component';

const routes: Routes = [
  {path:'',component:CourssoirComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourssoirRoutingModule { }
