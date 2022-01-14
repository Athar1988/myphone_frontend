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
  mailexiste;
  public authenticated :boolean;
  public clientconnecter;
  constructor(private http:HttpClient,
              private router:Router) { }



  addClient(client: Client): Observable<Client>{
    console.log(client);
    return this.http.post<Client>(this.host+"/clients/AjouteClient", client);
  }



  login(credentials){
    this.http.get(this.host+"/clients").subscribe(
      (data)=>{
        this.tousClient=data;
        let clientactuel;
        for(let i=0 ; i< this.tousClient._embedded.logins.length; i++){
          if(this.tousClient._embedded.clients[i].email==credentials.email && this.tousClient._embedded.clients[i].motdepasse==credentials.motdepasse){
            clientactuel=this.tousClient._embedded.clients[i];
          }
          else{

            this.mailexiste=false;
            console.log("utilisateur n'existe pas");
          }
        }

        if(clientactuel){
          //toster
          this.authenticated=true;
          this.clientconnecter=clientactuel;
          localStorage.setItem("token",JSON.stringify(this.clientconnecter));
          this.router.navigateByUrl('profil');
         // this.toaster.success('Bienvenu');
        }
        else {
          // this.msgerruer="erreur d'authentification, repeter une autre fois";
          this.authenticated=false;
          this.router.navigateByUrl('/compte');
        }



      }
    )
  }



}

