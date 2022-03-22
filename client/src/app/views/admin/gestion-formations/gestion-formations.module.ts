import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GestionFormationsRoutingModule } from './gestion-formations-routing.module';
import { GestionFormationsComponent } from './gestion-formations/gestion-formations.component';

@NgModule({
  declarations: [
    GestionFormationsComponent
  ],
  imports: [
    CommonModule,
    GestionFormationsRoutingModule,
    FormsModule
  ]
})
export class GestionFormationsModule { }
