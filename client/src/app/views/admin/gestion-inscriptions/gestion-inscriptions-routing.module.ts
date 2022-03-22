import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionInscriptionsComponent } from './gestion-inscriptions/gestion-inscriptions.component';

const routes: Routes = [
  {path:'',component:GestionInscriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionInscriptionsRoutingModule { }
