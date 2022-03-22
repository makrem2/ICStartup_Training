import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageErr=""
  messagesucces=""
  constructor(private  Activatedroute:ActivatedRoute,private ds:DataService,
    private router:Router) { }

  ngOnInit(): void {
  }

  contact(f:any){

    let data=f.value
    console.log(data)
    this.ds.contact(data).subscribe(data=>{
      this.messagesucces="Vos Message a été soumises avec succès. Merci !"
    },(err:HttpErrorResponse)=>{
     this.messageErr=err.error.text
      console.log(err.error)
    })

  }

}
