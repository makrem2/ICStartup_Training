import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
    username:any
  constructor(private authadmin:AuthadminService,private route:Router) {
    this.username = this.authadmin.getUserName()
   }

  ngOnInit(): void {
  }

  Lougout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }

}
