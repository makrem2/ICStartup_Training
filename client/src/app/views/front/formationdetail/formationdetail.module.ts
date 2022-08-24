import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationdetailRoutingModule } from './formationdetail-routing.module';
import { FormationdetailComponent } from './formationdetail/formationdetail.component';


@NgModule({
  declarations: [
    FormationdetailComponent
  ],
  imports: [
    CommonModule,
    FormationdetailRoutingModule
  ]
})
export class FormationdetailModule { }
