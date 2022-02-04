import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public host:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  public getProduitdeCategorie(url){
    return this.http.get(url);
  }


  public getTousProduits(){
    return this.http.get(this.host+"/products");
  }

  public getUneCategorie(id){
    return this.http.get(this.host+"/categories/"+id);
  }
  chercherMarqueProduit(motdepasse):Observable<Product> {
    return this.http.get<Product>(this.host+"/products/search/productsMarque?mc="+motdepasse);
  }

  chercherNameProduit(motdepasse) :Observable<Product>{
    return this.http.get<Product>(this.host+"/products/search/productsName?mc="+motdepasse);
  }
  chercherCategoryProduit(motdepasse):Observable<Product> {
    return this.http.get<Product>(this.host+"/products/search/productsCategory?mc="+motdepasse);
  }
  chercherDescriptionProduit(motdepasse):Observable<Product> {
    return this.http.get<Product>(this.host+"/products/search/productsDescription?mc="+motdepasse);
  }




}
