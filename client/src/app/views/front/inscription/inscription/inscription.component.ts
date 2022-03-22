import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  emaill:any
  datacategorie:any=[]
  messageErr=""
  messagesucces=""
  constructor(private  Activatedroute:ActivatedRoute,private ds:DataService,
    private router:Router) { 
    
    this.emaill= this.Activatedroute.snapshot.queryParamMap.get('email')

    //console.log(this.emaill)

    this.ds.getallcategorie().subscribe(data=>this.datacategorie=data)
  }

  ngOnInit(): void {
  }


  inscription(f:any){
    let data=f.value
    console.log(data)
    this.ds.addEtudiant(data).subscribe(data=>{
      this.messagesucces="Felicitation!!!votre demande d'inscription ajouté avec succès"
    },(err:HttpErrorResponse)=>{
     this.messageErr=err.error
      console.log(err.error)
    })
  }

  
}
