import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  datacourse:any=[]
  date:any
  datacategorie:any=[]
  imagepath:any='http://127.0.0.1:3000/'
  constructor(private ds:DataService) {

    this.ds.getallformations().subscribe(data=>this.datacourse=data)
    this.ds.getallcategorie().subscribe(data=>this.datacategorie=data)
   }

  ngOnInit(): void {
  }


}
