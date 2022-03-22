import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datacourse:any=[]
  datablog:any=[]
  dataformateur:any=[]
  date:any
  datacategorie:any=[]
  imagepath:any='http://127.0.0.1:3000/'
  constructor(private ds:DataService,private router:Router ) {

    this.ds.getallBlogs().subscribe(data=>this.datablog=data)
    this.ds.getallformations().subscribe(data=>this.datacourse=data)
    this.ds.getallcategorie().subscribe(data=>this.datacategorie=data)
    this.ds.getallformateur().subscribe(data=>this.dataformateur=data)
   }

  ngOnInit(): void {
  }

  SendIdBlog(id:number){
    this.router.navigate(['/detail-blog'], { queryParams: { blogid: id } }); 
    //console.log(this.id=id)
  }


}
