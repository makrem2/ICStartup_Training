import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-gestion-categories',
  templateUrl: './gestion-categories.component.html',
  styleUrls: ['./gestion-categories.component.css']
})
export class GestionCategoriesComponent implements OnInit {

  dataArray:any=[]
  data={
    name:'',
    id:0
  }
  messageSuccess=''
  constructor(private ds:DataService) {

    this.ds.getallcategorie().subscribe(data=>this.dataArray=data)

   }

  ngOnInit(): void {
  }

  DeleteCategorie(id:any,i:number){
    this.ds.deletecategorie(id).subscribe(response=>{
      //console.log(response)
      this.dataArray.splice(i,1)
    })

  }

  getdata(name:string,id:any){
    this.data.id=id
    this.data.name=name
    this.messageSuccess=''
    //console.log(this.data)

  }

  updatecategorie(f:any){
    let data=f.value
    this.ds.updatecategorie(this.data.id,data).subscribe(response=>{
      console.log(response)
      let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.data.id)
      this.dataArray[indexId].name=data.name
      this.messageSuccess="categorie updated sucsucfuly"
    },
      (err:HttpErrorResponse)=>
      {
        console.log(err)
      
      })
  }

}
