import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormateurComponent } from '../../front/formateur/formateur/formateur.component';
import { GestionFormateursComponent } from './gestion-formateurs/gestion-formateurs.component';

const routes: Routes = [
  {path:'',component:GestionFormateursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFormateursRoutingModule { }
