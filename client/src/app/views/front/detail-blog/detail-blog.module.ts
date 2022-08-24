import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailBlogRoutingModule } from './detail-blog-routing.module';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailBlogComponent
  ],
  imports: [
    CommonModule,
    DetailBlogRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class DetailBlogModule { }
