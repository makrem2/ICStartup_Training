import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailBlogRoutingModule } from './detail-blog-routing.module';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';


@NgModule({
  declarations: [
    DetailBlogComponent
  ],
  imports: [
    CommonModule,
    DetailBlogRoutingModule
  ]
})
export class DetailBlogModule { }
