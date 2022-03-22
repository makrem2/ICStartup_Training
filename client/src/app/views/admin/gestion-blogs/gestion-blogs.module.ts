import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionBlogsRoutingModule } from './gestion-blogs-routing.module';
import { GestionBlogsComponent } from './gestion-blogs/gestion-blogs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionBlogsComponent
  ],
  imports: [
    CommonModule,
    GestionBlogsRoutingModule,
    FormsModule
  ]
})
export class GestionBlogsModule { }
