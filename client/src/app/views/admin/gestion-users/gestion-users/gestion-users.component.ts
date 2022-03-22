import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {

  dataArray:any=[]
  constructor(private ds:DataService) {

    this.ds.getallusers().subscribe(data=>this.dataArray=data)

   }

  ngOnInit(): void {
  }

  DeleteUser(id:any,i:number){
    this.ds.deleteuser(id).subscribe(response=>{
      //console.log(response)
      this.dataArray.splice(i,1)
    })

  }

}
