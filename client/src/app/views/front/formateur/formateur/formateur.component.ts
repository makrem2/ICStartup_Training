import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  dataformateur:any=[]
  imagepath:any='http://127.0.0.1:3000/'
  constructor(private ds:DataService) { 
    this.ds.getallformateur().subscribe(data=>this.dataformateur=data)
  }

  ngOnInit(): void {
  }

}
