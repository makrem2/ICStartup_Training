import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUsersRoutingModule } from './gestion-users-routing.module';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';


@NgModule({
  declarations: [
    GestionUsersComponent
  ],
  imports: [
    CommonModule,
    GestionUsersRoutingModule
  ]
})
export class GestionUsersModule { }
