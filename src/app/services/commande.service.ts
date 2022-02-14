import { Injectable } from '@angular/core';
import {Commande} from '../model/Commande';
import {PanierService} from './panier.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  idclient;
  host="https://bestphonebk.herokuapp.com/";
  public commande: Commande = new Commande();
  constructor(private panierService: PanierService,
              private http: HttpClient) {}


  submitOrder(): Observable<Commande> {
    this.commande=JSON.parse(localStorage.getItem('commande'));
    localStorage.removeItem('panier');
    localStorage.removeItem('item');
    localStorage.removeItem('commande');
    this.idclient=localStorage.getItem('id');
    this.http.post<Commande>(this.host+"commandes",this.commande);
    return this.http.post<Commande>(this.host+"ajoutercommandes",this.commande);
  }

  recupereListeCommande(){
    this.idclient=localStorage.getItem('id');
    return this.http.get(this.host+"clients/"+this.idclient+"/commande");
  }

  recupereCommande(id){
    return this.http.get(this.host+"commandes/"+id);
  }

  supprimerCommande(id): Observable<Commande>{
    return this.http.delete<Commande>(this.host+"commandes/"+id );
  }

  recupereItemCommander(){
    return this.http.get(this.host+"commandes");
  }

  recupererClientCommander(id){
    return this.http.get(this.host+"commandes/"+id+"/client");
  }

  recuperedetailCommande(id){
    return this.http.get(this.host+"commandes/"+id+"/itemsCommande");
  }

  traiterCommande(id, commande): Observable<Commande>{
    return this.http.post<Commande>(this.host+"traitercommandes/"+id, commande);
  }

}
