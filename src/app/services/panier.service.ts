import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Item} from '../model/Item';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  host="https://bestphonebk.herokuapp.com/";
  idClient;
  panier;

  constructor(private http:HttpClient) { }

      recupereTousItem(){
        this.idClient=localStorage.getItem('id');
        return this.http.get(this.host+"clients/"+this.idClient+"/productItems");
        }


      updateQuantite(id,item): Observable<Item>{
      this.idClient=localStorage.getItem('id');
      return this.http.post<Item>(this.host+"productItems/"+this.idClient,item );
      }

      supprimerItem(id): Observable<Item>{
      return this.http.delete<Item>(this.host+"productItems/"+id );
      }


     sauvgarderItem(produitItem): Observable<Item>{
     this.idClient= localStorage.getItem('id');
     return this.http.post<Item>(this.host+"client/"+this.idClient+"/itemproduct", produitItem);
     }

}
