import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css'],
})
export class DetailBlogComponent implements OnInit {
  p: number = 1;
  datablog: any = [];
  dataablog: any = [];
  id: any;
  datacategorie: any = [];
  imagepath: any = 'http://127.0.0.1:3000/';
  dataCommentaire: any = [];
  messagesucces = '';
  messageErr = '';

  nbBlogComm:any;

  Blog = {
    name: '',
    email: '',
    message: '',
    BlogId: '',
  };
  constructor(
    private ds: DataService,
    private Activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.Activatedroute.snapshot.queryParamMap.get('blogid') || 0;
    //console.log(this.id)

    this.ds.getOneBlogs(this.id).subscribe((data) => (this.datablog = data));
    this.ds.getallcategorie().subscribe((data) => (this.datacategorie = data));
    this.ds.getallBlogs().subscribe((data) => (this.dataablog = data));

    this.ds
      .getCommentaireByBlog(this.id)
      .subscribe((data) => (this.dataCommentaire = data));


      this.ds
      .getCommentaireByBlog(this.id)
      .subscribe((res: any) => (this.nbBlogComm = res.length));
  }

  


  addCommentaire(f: any) {
    console.log(f.value);

    this.Blog.name = f.value.name;
    this.Blog.email = f.value.email;
    this.Blog.message = f.value.message;
    this.Blog.BlogId = this.id;

    this.ds.addCommentaire(this.Blog).subscribe(
      (data) => {
        this.messagesucces = 'Commentaire ajouter avec success';
        this.ngOnInit();
      },
      (err: HttpErrorResponse) => {
        this.messageErr = err.error;
        console.log(err.error);
      }
    );
  }
}
