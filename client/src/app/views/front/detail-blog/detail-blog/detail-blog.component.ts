import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {

  datablog:any=[]
  dataablog:any=[]
  id:any
  datacategorie:any=[]
  imagepath:any='http://127.0.0.1:3000/'

  constructor(private ds:DataService,
    private Activatedroute:ActivatedRoute,
               private router:Router) { 

           this.id= this.Activatedroute.snapshot.queryParamMap.get('blogid')||0
                //console.log(this.id)

                this.ds.getOneBlogs(this.id).subscribe(data=>this.datablog=data)
                this.ds.getallcategorie().subscribe(data=>this.datacategorie=data)
                this.ds.getallBlogs().subscribe(data=>this.dataablog=data)
  }

  ngOnInit(): void {
  }



}
