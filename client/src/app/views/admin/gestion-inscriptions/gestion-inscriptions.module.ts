import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionInscriptionsRoutingModule } from './gestion-inscriptions-routing.module';
import { GestionInscriptionsComponent } from './gestion-inscriptions/gestion-inscriptions.component';


@NgModule({
  declarations: [
    GestionInscriptionsComponent
  ],
  imports: [
    CommonModule,
    GestionInscriptionsRoutingModule
  ]
})
export class GestionInscriptionsModule { }
