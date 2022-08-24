import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-gestion-evenements',
  templateUrl: './gestion-evenements.component.html',
  styleUrls: ['./gestion-evenements.component.css']
})
export class GestionEvenementsComponent implements OnInit {


  imagepath:any='http://127.0.0.1:3000/'
  images:any;
  dataArray:any=[]
  dataevenment:any=[]
  dataArraycategorie:any=[]
  messageErr=""
  messagesucces=""

  title:any
  description:any
  date:any
  CategoryId:any
  userId:any


  constructor(private ds:DataService,private router:Router ,private auth:AuthadminService) {

    
    this.ds.getallcategorie().subscribe(data=>this.dataArraycategorie=data)
    this.userId = this.auth.getUserid()
   }

  ngOnInit(): void {
    this.ds.getallevenement().subscribe(data=>this.dataevenment=data)
  }

  
  deleteevenement(id:any,i:number){
    this.ds.deleteevenement(id).subscribe(response=>{
      console.log(response)
    this.dataevenment.splice(i,1)
})
  }

  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const path = event.target.files[0];
      console.log(path)
      this.images = path;
      console.log(this.images)
    }
  }


  addevenement(f:any){
    this.title=f.value.title
    this.description=f.value.description
    this.date=f.value.date
    this.CategoryId=f.value.categorie
    
    console.log(this.title)
    console.log(this.description)
    console.log(this.date)
    console.log(this.CategoryId)
    console.log(this.userId)

    const formData = new FormData();

    formData.append('title', this.title)
    formData.append('description', this.description)
    formData.append('photo', this.images)
    formData.append('date',this.date)
    formData.append('CategoryId',this.CategoryId)
    formData.append('UserId',this.userId)
    
    
   
    this.ds.addevenement(formData).subscribe(data=>{
    //  this.router.navigate(['/admin/gestionformateurs'])
    this.ngOnInit();
    this.messagesucces="Evenement ajouter avec success"
    
    },(err:HttpErrorResponse)=>{
     this.messageErr=err.error
      console.log(err.error)
    })
  }

}
