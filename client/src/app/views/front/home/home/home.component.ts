import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
// @ts-ignore
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  datacourse:any=[]
  datablog:any=[]
  dataformateur:any=[]
  date:any
  datacategorie:any=[]
  imagepath:any='http://127.0.0.1:3000/'
  responsiveOptions:any;
  constructor(private ds:DataService,private router:Router ) {
    
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

   }

  ngOnInit(): void {
    this.ds.getallBlogs().subscribe(data=>this.datablog=data)
    this.ds.getallformations().subscribe(data=>this.datacourse=data)
    this.ds.getallcategorie().subscribe(data=>this.datacategorie=data)
    this.ds.getallformateur().subscribe(data=>this.dataformateur=data)


    const target1 = document.querySelector('.tw')
    const target2 = document.querySelector('.tw')

    const writer1 = new Typewriter(target1, {
      typeSpeed: 60 
    })
    
    const writer2 = new Typewriter(target2, { 
      typeSpeed: 60 

    })
    
    writer1
      .type('La nouvelle façon ')
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start()
    writer2
      .type("d'apprendre")
      .rest(500)
      .clear()
      .changeTypeColor('red')
      .type("correctement avec nous !")
      .rest(500)
      .clear()
      .changeTypeColor('blue')
      .then(writer1.start.bind(writer1))
  }

  SendIdBlog(id:number){
    this.router.navigate(['/detail-blog'], { queryParams: { blogid: id } }); 
    //console.log(this.id=id)
  }


}
