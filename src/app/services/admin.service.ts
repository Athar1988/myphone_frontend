import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product.model';
import {Observable} from 'rxjs';
import {Client} from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }


  tousProduits(){
   return this.http.get("http://localhost:8080/products");
  }

  supprimerProduit(produit:Product){
    return this.http.delete("http://localhost:8080/products/"+produit.id);
  }


  ajouteProduit(produit:Product,idCategorie ):Observable<Product>{
    return this.http.post<Product>("http://localhost:8080/categorie/"+idCategorie+"/product", produit);
  }

  updateProduit(produit:Product): Observable<Product>{
    return this.http.post<Product>("http://localhost:8080/products/misejour/"+produit.id,produit );

  }

 recupereAdmin(){
    return this.http.get("http://localhost:8080/logins");
 }
  /*public tousProduits(page:number, size:number):Observable<Product>{
    console.log("http://localhost:8080/products?page="+page+"&size="+size);
    return this.http.get<Product>("http://localhost:8080/products?page="+page+"&size="+size);
  }*/

}
