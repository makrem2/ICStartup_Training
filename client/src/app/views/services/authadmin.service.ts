import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthadminService {

  Profileadmin={
    username:'',
    role:''
  }



   helper = new JwtHelperService();
  constructor(private http:HttpClient) { }



login(data:any){

  return this.http.post('http://localhost:3000/login',data)
}

  isSaveDataProfile(token:any)
  {
    localStorage.setItem('token',token)
  }

  getUserName(){
    let token:any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)

    return decodeToken.username
  }

  getUserid(){
    let token:any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)

    return decodeToken.id
  }

  isLoggedIN(){
    let token:any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)

    if (!localStorage.getItem('token'))
    {
      return false
    }
    let role=decodeToken.role
    if (role!=='Admin'){
      return false
    }
    if (this.helper.isTokenExpired(token)){
      return false
    }
    return true
  }
  

}