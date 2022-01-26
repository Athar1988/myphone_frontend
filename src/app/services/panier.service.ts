import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';
import {ClientService} from './client.service';
import {Observable} from 'rxjs';
import {Client} from '../model/client.model';
import {HttpClient} from '@angular/common/http';
import {Item} from '../model/Item';
import {Commande} from '../model/Commande';
//import {constFactory} from '../../../node_modules2/webdriver-js-extender/built/spec/mock-server/commands/helpers';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public host:string="http://localhost:8080";
  idClient;


  constructor(public ClientService: ClientService,
              private http:HttpClient) { }


   recupereTousItem(){
  this.idClient=localStorage.getItem('id');
  return this.http.get("http://localhost:8080/clients/"+this.idClient+"/productItems");
}


  updateQuantite(id,item): Observable<Item>{
    this.idClient=localStorage.getItem('id');
   return this.http.post<Item>("http://localhost:8080/productItems/"+this.idClient,item );
  }

  supprimerItem(id): Observable<Item>{
  return this.http.delete<Item>("http://localhost:8080/productItems/"+id );
  }


  enregisterCommande(commande: Commande){
    console.log(commande.products+" nom premier item");
    return this.http.post("http://localhost:8080/commandes/AjouteCommande", commande );

  }


}
