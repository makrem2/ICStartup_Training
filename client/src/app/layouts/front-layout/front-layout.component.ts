import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  SendEmail(email:any){


    this.router.navigate(['/inscription'], { queryParams: { email: email } }); 
    //console.log(email)

  }

}
