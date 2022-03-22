import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcategoriesRoutingModule } from './addcategories-routing.module';
import { AddcategoriesComponent } from './addcategories/addcategories.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddcategoriesComponent
  ],
  imports: [
    CommonModule,
    AddcategoriesRoutingModule,
    FormsModule
  ]
})
export class AddcategoriesModule { }
