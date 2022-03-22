import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthadminService } from '../services/authadmin.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsadminGuard implements CanActivate {
  constructor(private as:AuthadminService,private route:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    return new Promise((resolve,reject)=>{
      if (this.as.isLoggedIN()==true)
      {
        resolve(true)
      }
      else{
      this.route.navigate(['/admin/login'],{queryParams:{returnUrl:state.url}})
      resolve(false)
    }
    })
  
  
  }


  
}
