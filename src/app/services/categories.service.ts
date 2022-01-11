import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public host:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  public getResource(url){
    return this.http.get(url);
  }

  chercherProduit(motdepasse: string) {
   // console.log("http://localhost:8080/products/search/productsName?mc="+motdepasse);
    //console.log("http://localhost:8080/products/search/productsMarque?mc="+motdepasse);
   // console.log("http://localhost:8080/products/search/productsDescription?mc="+motdepasse);
    //console.log("http://localhost:8080/products/search/productsCategory?mc="+motdepasse);
    //console.log(this.http.get("http://localhost:8080/products/search/productsCategory?mc="+motdepasse));
    return this.http.get("http://localhost:8080/products/search/productsMarque?mc="+motdepasse);
    return this.http.get("http://localhost:8080/products/search/productsName?mc="+motdepasse);
  }




}
