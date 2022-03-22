import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEvenementsRoutingModule } from './gestion-evenements-routing.module';
import { GestionEvenementsComponent } from './gestion-evenements/gestion-evenements.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionEvenementsComponent
  ],
  imports: [
    CommonModule,
    GestionEvenementsRoutingModule,
    FormsModule
  ]
})
export class GestionEvenementsModule { }
