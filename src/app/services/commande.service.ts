import { Injectable } from '@angular/core';
import {Commande} from '../model/Commande';
import {Client} from '../model/client.model';
import {PanierService} from './panier.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  public commande: Commande = new Commande();
  constructor(private panierService: PanierService,
              private http: HttpClient ) {

  }



  submitOrder(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>("http://localhost:8080/commandes",commande);
  }




}
