import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementComponent } from '../../front/evenement/evenement/evenement.component';
import { GestionEvenementsComponent } from './gestion-evenements/gestion-evenements.component';

const routes: Routes = [
  {path:'',component:GestionEvenementsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEvenementsRoutingModule { }
