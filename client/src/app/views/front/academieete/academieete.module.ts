import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademieeteRoutingModule } from './academieete-routing.module';
import { AcademieeteComponent } from './academieete/academieete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AcademieeteComponent
  ],
  imports: [
    CommonModule,
    AcademieeteRoutingModule,
    FormsModule
  ]
})
export class AcademieeteModule { }
