import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
  
  messageErr=""


  constructor(private ds:DataService,private router:Router) { }


  ngOnInit(): void {
  }

  adduser(f:any){
    let data=f.value
    //console.log(data)
    this.ds.addusers(data).subscribe(data=>{
     this.router.navigate(['/admin/gestionuser'])
    },(err:HttpErrorResponse)=>{
     this.messageErr=err.error
      console.log(err.error)
    })
  }

}
