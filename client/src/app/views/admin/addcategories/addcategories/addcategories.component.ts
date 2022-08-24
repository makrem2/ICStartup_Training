import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css']
})
export class AddcategoriesComponent implements OnInit {


  messageErr=""

  constructor( private ds:DataService,private router:Router) { }

  
  ngOnInit(): void {
  }

  addcategorie(f:any){
    let data=f.value
    this.ds.addcategorie(data).subscribe(data=>{
     this.router.navigate(['/admin/gestioncategories'])
    },(err:HttpErrorResponse)=>{
     this.messageErr=err.error
      console.log(err.error)
    })
  }

}
