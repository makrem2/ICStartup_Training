import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';


@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {

  dataRecevie:any
  url:any
  messageErr:any
  constructor(private authadmin:AuthadminService,private router:Router,private ActRoute:ActivatedRoute) {
   
    if (this.authadmin.isLoggedIN()==true){
      this.router.navigate(['/admin'])

   }
   }

  ngOnInit(): void {
  this.url=this.ActRoute.snapshot.queryParams['returnUrl'] ||'/admin/'
  console.log(this.url)
  }


  loginadmin(f:any){

    let data=f.value
    this.authadmin.login(data).subscribe(response=>
      {
      this.dataRecevie=response
      this.authadmin.isSaveDataProfile(this.dataRecevie.token.token)

      this.router.navigate([this.url])
      
      },    
      error=>{
        this.messageErr=error.error.message
      })
  }


}

