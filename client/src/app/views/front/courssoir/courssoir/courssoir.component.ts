import { ViewportScroller } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-courssoir',
  templateUrl: './courssoir.component.html',
  styleUrls: ['./courssoir.component.css'],
})
export class CourssoirComponent implements OnInit {
  emaill: any;
  datacategorie: any = [];
  messageErr = '';
  messagesucces = '';
  datacourse: any = [];
  datacourseMarketing: any = [];
  datacourseByWeb: any = [];
  datacourseByData: any = [];
  datacourseByDesign: any = [];
  datacourseByGame: any = [];
  datacourseBySysteme: any = [];
  datacourseBySecurite: any = [];
  datacourseByKids: any = [];
  imagepath: any = 'http://127.0.0.1:3000/';
  constructor(
    private Activatedroute: ActivatedRoute,
    private ds: DataService,
    private router: Router,
    private scroller: ViewportScroller
  ) {
    this.ds.getallcategorie().subscribe((data) => (this.datacategorie = data));

    this.ds.getallformations().subscribe((data) => (this.datacourse = data));
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

  inscription(f: any) {
    let data = f.value;
    console.log(data);
    this.ds.addEtudiant(data).subscribe(
      (data) => {
        this.messagesucces =
          "Felicitation!!!votre demande d'inscription ajouté avec succès";
      },
      (err: HttpErrorResponse) => {
        this.messageErr = err.error;
        console.log(err.error);
      }
    );
  }


  goinscription(){
    this.scroller.scrollToAnchor("inscription");
  }
}
