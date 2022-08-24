import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-gestion-formateurs',
  templateUrl: './gestion-formateurs.component.html',
  styleUrls: ['./gestion-formateurs.component.css']
})
export class GestionFormateursComponent implements OnInit {


  messagesucces=""
  imagepath:any='http://127.0.0.1:3000/'
  images:any;
  dataArray:any=[]
  dataformateur:any=[]
  messageErr=""

  name:any
  prenom:any
  post:any


  constructor(private ds:DataService,private router:Router ,private auth:AuthadminService) {
    
   }

   ResetMessage(){
    this.messagesucces=""
    this.messageErr=""
   }

  ngOnInit(): void {
    this.ds.getallformateur().subscribe(data=>this.dataformateur=data)
  }

  deleteformateur(id:any,i:number){
    this.ds.deleteformateur(id).subscribe(response=>{
      console.log(response)
    this.dataformateur.splice(i,1)
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


  addformateur(f:any){
    this.name=f.value.name
    this.prenom=f.value.prenom
    this.post=f.value.post
    
    console.log(this.name)
    console.log(this.prenom)
    console.log(this.post)

    const formData = new FormData();

    formData.append('name', this.name)
    formData.append('prenom', this.prenom)
    formData.append('photo', this.images)
    formData.append('post',this.post)
    
   
    this.ds.addformateur(formData).subscribe(data=>{
      this.ngOnInit();
      f.resetForm();
     //this.router.navigate(['/admin/gestionformateurs'])
     this.messagesucces="Formateur ajouter avec success"
    },(err:HttpErrorResponse)=>{
     this.messageErr=err.error
      // console.log(err.error)
    })
  }


}
