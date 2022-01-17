import { Injectable } from '@angular/core';
import {Client} from '../model/client.model';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public host:string="http://localhost:8080";
  tousClient:any;
  clientactuel: Client;
  public authenticated :boolean;
  connected;
  constructor(private http:HttpClient,
              private router:Router) { }



  ajouteClient(client: Client): Observable<Client>{
    console.log(client);
    return this.http.post<Client>(this.host+"/clients", client);
  }

  recupererClient(){
    return this.http.get("http://localhost:8080/clients");
  }


  clientConnecter(){
    if(localStorage.getItem("token")){
      this.clientactuel=this.clientActuel(localStorage.getItem("token"));
      this.connected=true;
    }
  }


  isAuthenticated(){
    return this.connected;
  }


  clientActuel(token){
    this.http.get("http://localhost:8080/clients").subscribe(
      (data)=>{
        this.tousClient=data;
        for(let i=0 ; i< this.tousClient._embedded.clients.length; i++){
          if(this.tousClient._embedded.clients[i].email==token){
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
    localStorage.removeItem('token');
  }
}

