import { Injectable } from '@angular/core';
import {Commande} from '../model/Commande';
import {Client} from '../model/client.model';
import {PanierService} from './panier.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClientService} from './client.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  idclient;
  public commande: Commande = new Commande();
  constructor(private panierService: PanierService,
              private http: HttpClient) {

  }



  submitOrder(): Observable<Commande> {
    this.commande=JSON.parse(localStorage.getItem('commande'));
    //vider panier
    localStorage.removeItem('panier');
    localStorage.removeItem('item');
    localStorage.removeItem('commande');
    // supprimerr items
    this.idclient=localStorage.getItem('id');
    return this.http.post<Commande>("http://localhost:8080/commandes",this.commande);
  }


  recupereListeCommande(){
    this.idclient=localStorage.getItem('id');
    return this.http.get("http://localhost:8080/clients/"+this.idclient+"/commande");
  }


  recuperedetailCommande(id){
    return this.http.get("http://localhost:8080/commandes/"+id+"/itemsCommande");
  }



}
