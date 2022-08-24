import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NextDirective } from './home/next.directive';
import { PrevDirective } from './home/prev.directive';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    HomeComponent,
    NextDirective,
    PrevDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgImageSliderModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule,
    NgxPaginationModule
    
  ]
})
export class HomeModule { }
