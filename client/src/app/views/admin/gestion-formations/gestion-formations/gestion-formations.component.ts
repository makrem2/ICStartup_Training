import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-gestion-formations',
  templateUrl: './gestion-formations.component.html',
  styleUrls: ['./gestion-formations.component.css'],
})
export class GestionFormationsComponent implements OnInit {
  messageErr = '';
  messageSuccess = '';

  title: any;
  desc: any;
  username: any;
  prix: any;
  duree: any;
  FormateurId: any;
  CategoryId: any;

  images: any;
  dataArray: any = [];
  dataArraycategorie: any = [];
  dataformateur: any = [];
  userId: any;
  imagepath: any = 'http://127.0.0.1:3000/';

  ModfierCategorie: any;
  ModfierFormateur: any;

  //const PF = "http://localhost:5000/images/";

  data = {
    id: 0,
    title: '',
    desc: '',
    username: '',
    prix: '',
    duree: '',
    FormateurId: '',
    CategoryId: '',
    userId: '',
    photo: '',
  };
  constructor(
    private ds: DataService,
    private router: Router,
    private auth: AuthadminService
  ) {
    this.ds
      .getallcategorie()
      .subscribe((data) => (this.dataArraycategorie = data));
    this.ds.getallformateur().subscribe((data) => (this.dataformateur = data));

    this.userId = this.auth.getUserid();
  }

  ngOnInit(): void {
    this.ds.getallformations().subscribe((data) => (this.dataArray = data));
  }

  RestMessage() {
    this.messageErr = '';
    this.messageSuccess = '';
  }

  getdata(
    title: string,
    desc: string,
    id: any,
    username: string,
    prix: string,
    duree: string,
    Categoryname: string,
    Formateurname: string,
    userId: string,
    photo: string
  ) {
    this.data.id = id;
    this.data.title = title;
    this.data.desc = desc;
    this.data.username = username;
    this.data.prix = prix;
    this.data.duree = duree;
    this.data.CategoryId = Categoryname;
    this.data.FormateurId = Formateurname;
    this.data.userId = userId;
    this.data.photo = photo;

    this.ModfierCategorie = Categoryname;
    this.ModfierFormateur = Formateurname;
  }

  deleteformation(id: any, i: number) {
    this.ds.deleteformation(id).subscribe((response) => {
      console.log(response);
      this.dataArray.splice(i, 1);
    });
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const path = event.target.files[0];
      console.log(path);
      this.images = path;
      console.log(this.images);
    }
  }

  addformation(f: any) {
    this.title = f.value.title;
    this.desc = f.value.desc;
    this.username = f.value.username;
    this.prix = f.value.prix;
    this.duree = f.value.duree;
    this.FormateurId = f.value.forma;
    this.CategoryId = f.value.categorie;

    const formData = new FormData();

    formData.append('title', this.title);
    formData.append('desc', this.desc);
    formData.append('photo', this.images);
    formData.append('username', this.username);
    formData.append('prix', this.prix);
    formData.append('duree', this.duree);
    formData.append('UserId', this.userId);
    formData.append('CategoryId', this.CategoryId);
    formData.append('FormateurId', this.FormateurId);

    this.ds.addformations(formData).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccess = 'formation ajouter avec success';
        f.resetForm();
        //  this.router.navigate(['/admin/gestionformations'])
      },
      (err: HttpErrorResponse) => {
        this.messageErr = err.error;
        console.log(err.error);
      }
    );
  }

  updateformations(fM: any) {
    let data = fM.value;
    console.log(data);

    console.log('photo', this.images);
    if (this.images) {
      console.log('hello');
    } else {
      console.log('fuck');
    }
  }
}
