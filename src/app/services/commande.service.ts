import { Injectable } from '@angular/core';
import {Commande} from '../model/Commande';
import {Client} from '../model/client.model';
import {PanierService} from './panier.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClientService} from './client.service';
import {Item} from '../model/Item';

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
    this.http.post<Commande>("http://localhost:8080/commandes",this.commande);
    return this.http.post<Commande>("http://localhost:8080/ajoutercommandes",this.commande);
  }


  recupereListeCommande(){
    this.idclient=localStorage.getItem('id');
    return this.http.get("http://localhost:8080/clients/"+this.idclient+"/commande");
  }

  recupereCommande(id){
    return this.http.get("http://localhost:8080/commandes/"+id);
  }


  supprimerCommande(id): Observable<Commande>{
    return this.http.delete<Commande>("http://localhost:8080/commandes/"+id );
  }



  recupereItemCommander(){
    return this.http.get("http://localhost:8080/commandes");
  }

  recupererClientCommander(id){
    console.log("http://localhost:8080/commandes/"+id+"/client");
    return this.http.get("http://localhost:8080/commandes/"+id+"/client");
  }

  recuperedetailCommande(id){
    return this.http.get("http://localhost:8080/commandes/"+id+"/itemsCommande");
  }

  traiterCommande(id, commande): Observable<Commande>{
    console.log(id+" iddd");
    console.log(commande+" commmmande");
    return this.http.post<Commande>("http://localhost:8080/traitercommandes/"+id, commande);
  }

}
