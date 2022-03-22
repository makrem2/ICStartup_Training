import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionBlogsComponent } from './gestion-blogs/gestion-blogs.component';

const routes: Routes = [
  {path:'',component:GestionBlogsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionBlogsRoutingModule { }
