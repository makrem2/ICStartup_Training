import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-gestion-blogs',
  templateUrl: './gestion-blogs.component.html',
  styleUrls: ['./gestion-blogs.component.css']
})
export class GestionBlogsComponent implements OnInit {

  imagepath:any='http://127.0.0.1:3000/'
  images:any;
  dataArray:any=[]
  dataBlogs:any=[]
  dataArraycategorie:any=[]
  messageErr=""
  messagesucces=""

  title:any
  desc:any
  username:any
  CategoryId:any
  userId:any

  constructor(private ds:DataService,private router:Router ,private auth:AuthadminService) {

    this.ds.getallBlogs().subscribe(data=>this.dataBlogs=data)
    this.ds.getallcategorie().subscribe(data=>this.dataArraycategorie=data)
    this.userId = this.auth.getUserid()
   }

  ngOnInit(): void {
  }


  deleteBlogs(id:any,i:number){
    this.ds.deleteBlogs(id).subscribe(response=>{
      console.log(response)
    this.dataBlogs.splice(i,1)
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


  addBlogs(f:any){
    this.title=f.value.title
    this.desc=f.value.desc
    this.username=f.value.username
    this.CategoryId=f.value.categorie
    
    console.log(this.title)
    console.log(this.desc)
    console.log(this.username)
    console.log(this.CategoryId)
    console.log(this.userId)

    const formData = new FormData();

    formData.append('title', this.title)
    formData.append('desc', this.desc)
    formData.append('photo', this.images)
    formData.append('username',this.username)
    formData.append('CategoryId',this.CategoryId)
    formData.append('UserId',this.userId)
    
    
   
    this.ds.addBlogs(formData).subscribe(data=>{
    //  this.router.navigate(['/admin/gestionformateurs'])
    this.messagesucces="Blog ajouter avec success"
    },(err:HttpErrorResponse)=>{
     this.messageErr=err.error
      console.log(err.error)
    })
  }

}
