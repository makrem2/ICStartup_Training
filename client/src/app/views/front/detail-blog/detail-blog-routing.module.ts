import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';

const routes: Routes = [
  {path:'',component:DetailBlogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailBlogRoutingModule { }
