import { Injectable } from '@angular/core';
import {Client} from '../model/client.model';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Item} from '../model/Item';
import {PanierService} from './panier.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public host:string="http://localhost:8080";
  tousClient:any;
  clientactuel: any;
  public authenticated :boolean;
  connected;
  nombreItem;
  idclient;
  constructor(private http:HttpClient) { }



  sauvgarderClient(client: Client): Observable<Client>{
    return this.http.post<Client>("http://localhost:8080/clients/AjouteClient", client);
  }

  recupererClient(){
    return this.http.get(this.host+"/clients");
  }


  clientConnecter(){
    if(localStorage.getItem("id")){
      this.clientactuel=this.clientActuel(localStorage.getItem("id"));
      this.connected=true;
    }
  }


  isAuthenticated(){
    return this.connected;
  }


  clientActuel(token){
    this.http.get(this.host+"/clients").subscribe(
      (data)=>{
        this.tousClient=data;
        for(let i=0 ; i< this.tousClient._embedded.clients.length; i++){
          if(this.tousClient._embedded.clients[i].id==token){
            this.clientactuel=this.tousClient._embedded.clients[i];
          }
        }
      }
    )
    return this.clientactuel;
  }


  logout(){
    this.connected=false;
    this.clientactuel=undefined;
    this.idclient= localStorage.getItem('id');
    this.supprimerTousItem(this.idclient).subscribe(
      (data)=>{console.log("items supprimés")},
      (err)=>{console.log("probleme reseau ")}
    )
    localStorage.removeItem('id');
    localStorage.removeItem('mail');
    localStorage.removeItem('panier');
    localStorage.removeItem('item');
  }

  supprimerTousItem(id): Observable<Item>{
    return this.http.delete<Item>("http://localhost:8080/supprimerTousItems/"+id );
  }




}

