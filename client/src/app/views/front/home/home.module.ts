import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NextDirective } from './home/next.directive';
import { PrevDirective } from './home/prev.directive';


@NgModule({
  declarations: [
    HomeComponent,
    NextDirective,
    PrevDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgImageSliderModule
  ]
})
export class HomeModule { }
