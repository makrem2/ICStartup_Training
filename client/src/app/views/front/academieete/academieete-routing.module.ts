import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademieeteComponent } from './academieete/academieete.component';

const routes: Routes = [
  {path:'',component:AcademieeteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademieeteRoutingModule { }
