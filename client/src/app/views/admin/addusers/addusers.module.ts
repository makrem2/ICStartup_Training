import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddusersRoutingModule } from './addusers-routing.module';
import { AddusersComponent } from './addusers/addusers.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddusersComponent
  ],
  imports: [
    CommonModule,
    AddusersRoutingModule,
    FormsModule
  ]
})
export class AddusersModule { }
