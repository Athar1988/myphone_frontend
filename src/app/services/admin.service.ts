import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product.model';
import {Observable} from 'rxjs';
import {Client} from '../model/client.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  host=environment.backendServer;
  constructor(private http:HttpClient) { }


  tousProduits(){
    //return this.http.get("http://localhost:8080/products?page="+p+"&size=20");
   return this.http.get(this.host+"products");
  }
  supprimerProduit(produit:Product){
    return this.http.delete(this.host+"products/"+produit.id);
  }
  ajouteProduit(produit:Product,idCategorie ):Observable<Product>{
    return this.http.post<Product>(this.host+"categorie/"+idCategorie+"/product", produit);
  }
  updateProduit(produit:Product, idCategorie): Observable<Product>{
    return this.http.post<Product>(this.host+"products/misejour/"+produit.id+"/"+idCategorie,produit );
  }
 recupereAdmin(){
    return this.http.get(this.host+"logins");
 }
}
