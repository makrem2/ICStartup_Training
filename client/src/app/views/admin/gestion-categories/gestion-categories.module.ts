import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCategoriesRoutingModule } from './gestion-categories-routing.module';
import { GestionCategoriesComponent } from './gestion-categories/gestion-categories.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionCategoriesComponent
  ],
  imports: [
    CommonModule,
    GestionCategoriesRoutingModule,
    FormsModule
  ]
})
export class GestionCategoriesModule { }
