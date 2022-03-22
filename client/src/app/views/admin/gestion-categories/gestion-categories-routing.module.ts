import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionCategoriesComponent } from './gestion-categories/gestion-categories.component';

const routes: Routes = [
  {path:'',component:GestionCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCategoriesRoutingModule { }
