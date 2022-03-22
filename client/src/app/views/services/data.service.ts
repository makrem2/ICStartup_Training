import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


    // CRUD users

  addusers(users:any){
    return this.http.post('http://localhost:3000/register',users)
  }

  getallusers(){
    return this.http.get('http://localhost:3000/users')
  }

  deleteuser(id:any){
    return this.http.delete('http://localhost:3000/user/'+id)
  }


  
  // CRUD Categorie

  addcategorie(categorie:any){
    return this.http.post('http://localhost:3000/api/category/addCategory',categorie)
  }

  getallcategorie(){
    return this.http.get('http://localhost:3000/api/category/allCategory')
  }
  
  deletecategorie(id:any){
    return this.http.delete('http://localhost:3000/api/category/deletecategorie/'+id)
  }
  
  updatecategorie(id:any,categorie:any){
    return this.http.patch('http://localhost:3000/api/category/updateCategory/'+id,categorie)
  }
  
  
  
  
  

  //CRUD Formation
  addformations(formation:any){
    return this.http.post('http://localhost:3000/api/formation/addFormation',formation)
  }

  updateformations(id:any,formation:any){
    return this.http.post('http://localhost:3000/api/formation/updateFormation/'+id,formation)
  }
  
  getallformations(){
    return this.http.get('http://localhost:3000/api/formation/getAllFormation')
  }

  deleteformation(id:any){
    return this.http.delete('http://localhost:3000/api/formation/deleteFormation/'+id)
  }



    //CRUD Formateur

    addformateur(formateur:any){
      return this.http.post('http://localhost:3000/api/formateur/addFormateur',formateur)
    }

    getallformateur(){
      return this.http.get('http://localhost:3000/api/formateur/getAllFormateur')
    }

    deleteformateur(id:any){
      return this.http.delete('http://localhost:3000/api/formateur/deleteFormateur/'+id)
    }


    //CRUD Evenement

    addevenement(formateur:any){
      return this.http.post('http://localhost:3000/api/evenement/addEvenement',formateur)
    }

    getallevenement(){
      return this.http.get('http://localhost:3000/api/evenement/getAllEvenement')
    }

    deleteevenement(id:any){
      return this.http.delete('http://localhost:3000/api/evenement/deleteEvenement/'+id)
    }


    //CRUD Blogs

    addBlogs(blog:any){
      return this.http.post('http://localhost:3000/api/blog/addBlog',blog)
    }

    getallBlogs(){
      return this.http.get('http://localhost:3000/api/blog/getAllBlog')
    }

    deleteBlogs(id:any){
      return this.http.delete('http://localhost:3000/api/blog/deleteBlog/'+id)
    }

    getOneBlogs(id:any){
      return this.http.get('http://localhost:3000/api/blog/getOneBlog/'+id)
    }



    //CRUD Etudiant

    addEtudiant(etudiant:any){
      return this.http.post('http://localhost:3000/api/etudiant/addEtudiant',etudiant)
    }

    getallEtudiant(){
      return this.http.get('http://localhost:3000/api/etudiant/getAllEtudiant')
    }

    deleteEtudiant(id:any){
      return this.http.delete('http://localhost:3000/api/etudiant/deleteEtudiant/'+id)
    }

    getOneEtudiant(id:any){
      return this.http.get('http://localhost:3000/api/etudiant/getOneEtudiant/'+id)
    }



    //contact form

    contact(contact:any){
      return this.http.post('http://localhost:3000/contact',contact)
    }




}
