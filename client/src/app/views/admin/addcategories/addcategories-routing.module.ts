import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoriesComponent } from './addcategories/addcategories.component';

const routes: Routes = [
  {path:'',component:AddcategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcategoriesRoutingModule { }
