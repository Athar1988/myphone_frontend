import { Injectable } from '@angular/core';
import {Client} from '../model/client.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../model/Item';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public host=environment.backendServer;
  tousClient:any;
  clientactuel: any;
  connected;
  idclient;
  constructor(private http:HttpClient) { }



  sauvgarderClient(client: Client): Observable<Client>{
    return this.http.post<Client>(this.host+"clients/AjouteClient", client);
  }

  ModifierClient(client: Client): Observable<Client>{
    return this.http.post<Client>(this.host+"clients/misejour/"+client.id, client);
  }

  recupererTousClient(){
    return this.http.get(this.host+"clients");
  }

  recupererClient(id){
    return this.http.get(this.host+"clients/"+id);
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

  AdminAuthenticated(): boolean {
    return !!localStorage.getItem('admin');
  }

  clientActuel(token){
    this.http.get(this.host+"clients").subscribe(
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
    localStorage.removeItem('commande');
  }

  supprimerTousItem(id): Observable<Item>{
    localStorage.removeItem('item');
    return this.http.delete<Item>(this.host+"supprimerTousItems/"+id );
  }

  ajouterContact(contact): Observable<Client>{
    return this.http.post<Client>(this.host+"contacts", contact);
  }

  recupereMessage(){
    return this.http.get(this.host+"contacts");
  }

  supprimerMessage(id: any) {
    return this.http.delete(this.host+"contacts/"+id );
  }

  supprimerClient(id: any) {
    return this.http.delete(this.host+"clients/"+id );
  }

}

