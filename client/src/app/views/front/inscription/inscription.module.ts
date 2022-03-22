import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    FormsModule
  ]
})
export class InscriptionModule { }
