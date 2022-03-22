import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  dataevent:any=[]
  imagepath:any='http://127.0.0.1:3000/'
  constructor(private ds:DataService) {
    this.ds.getallevenement().subscribe(data=>this.dataevent=data)
   }

  ngOnInit(): void {
  }

}
