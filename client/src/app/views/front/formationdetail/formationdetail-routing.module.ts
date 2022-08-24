import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationdetailComponent } from './formationdetail/formationdetail.component';

const routes: Routes = [
  {path:'',component:FormationdetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationdetailRoutingModule { }
