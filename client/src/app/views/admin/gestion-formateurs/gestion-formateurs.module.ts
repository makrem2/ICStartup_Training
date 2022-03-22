import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionFormateursRoutingModule } from './gestion-formateurs-routing.module';
import { GestionFormateursComponent } from './gestion-formateurs/gestion-formateurs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionFormateursComponent
  ],
  imports: [
    CommonModule,
    GestionFormateursRoutingModule,
    FormsModule
  ]
})
export class GestionFormateursModule { }
