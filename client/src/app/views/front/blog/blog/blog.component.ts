import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  datablog:any=[]
  id:any
  datacategorie:any=[]
  imagepath:any='http://127.0.0.1:3000/'
  constructor(private ds:DataService,private router:Router) {

    this.ds.getallBlogs().subscribe(data=>this.datablog=data)
    this.ds.getallcategorie().subscribe(data=>this.datacategorie=data)

   }

  ngOnInit(): void {
  }

  SendIdBlog(id:number){
    this.router.navigate(['/detail-blog'], { queryParams: { blogid: id } }); 
    //console.log(this.id=id)
  }



}
