import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  datacourse: any = [];
  datacourseMarketing: any = [];
  datacourseByWeb: any = [];
  datacourseByData: any = [];
  datacourseByDesign: any = [];
  datacourseByGame: any = [];
  datacourseBySysteme: any = [];
  datacourseBySecurite: any = [];
  datacourseByKids: any = [];
  date: any;
  datacategorie: any = [];
  imagepath: any = 'http://127.0.0.1:3000/';
  constructor(private ds: DataService) {
    this.ds.getallformations().subscribe((data) => (this.datacourse = data));
    this.ds.getallcategorie().subscribe((data) => (this.datacategorie = data));

    this.ds
      .getFormationByCategorie('Marketing')
      .subscribe((data) => (this.datacourseMarketing = data));

    this.ds
      .getFormationByCategorie('Web')
      .subscribe((data) => (this.datacourseByWeb = data));

    this.ds
      .getFormationByCategorie('Data')
      .subscribe((data) => (this.datacourseByData = data));

    this.ds
      .getFormationByCategorie('Design')
      .subscribe((data) => (this.datacourseByDesign = data));
    this.ds
      .getFormationByCategorie('Game')
      .subscribe((data) => (this.datacourseByGame = data));
    this.ds
      .getFormationByCategorie('Systéme')
      .subscribe((data) => (this.datacourseBySysteme = data));
    this.ds
      .getFormationByCategorie('Sécurité')
      .subscribe((data) => (this.datacourseBySecurite = data));
    this.ds
      .getFormationByCategorie('Kids')
      .subscribe((data) => (this.datacourseByKids = data));
  }

  ngOnInit(): void {}
}
