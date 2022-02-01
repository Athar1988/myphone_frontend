import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }


  tousProduits(){
   return this.http.get("http://localhost:8080/products");
  }


  /*public tousProduits(page:number, size:number):Observable<Product>{
    console.log("http://localhost:8080/products?page="+page+"&size="+size);
    return this.http.get<Product>("http://localhost:8080/products?page="+page+"&size="+size);
  }*/

}
