import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-gestion-inscriptions',
  templateUrl: './gestion-inscriptions.component.html',
  styleUrls: ['./gestion-inscriptions.component.css']
})
export class GestionInscriptionsComponent implements OnInit {

  datainscription:any=[]
  constructor(private ds:DataService) { 

    this.ds.getallEtudiant().subscribe(data=>this.datainscription=data)
  }

  ngOnInit(): void {
  }


  Deleteinscription(id:any,i:number){
    this.ds.deleteEtudiant(id).subscribe(response=>{
      //console.log(response)
      this.datainscription.splice(i,1)
    })

  }

}
