import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/client.model';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  email;
  motdepasse;
  telephone;
  nom;
  prenom;
  ville;
  adresse;
  emailexiste;
  loginemailexiste;
  client:any;
  loginmotdepasse;
  loginemail;
  //client:Client;


  constructor(private serviceClient: ClientService  ,
              private router:Router) { }

  ngOnInit(): void {
  }







  Connexion(credentials: any) {
    // verifier le login
    this.serviceClient.recupererClient().subscribe(
      data=>{
        this.client=data;
        for(let i=0 ; i< this.client._embedded.clients.length; i++) {
          if (this.client._embedded.clients[i].email == credentials.loginemail && this.client._embedded.clients[i].motdepasse == credentials.loginmotdepasse) {
            this.loginemailexiste=true;
            localStorage.setItem('token', credentials.loginemail);
            this.router.navigate(['/profil']);
          }
          else{
            this.loginemailexiste=false;
            console.log("mail n'existe pas");
          }
        }
        console.log(this.client)},
      err=>{console.log("probleme reseau")}
    )
  }



  ajoutClient(credentials: Client) {
    this.serviceClient.recupererClient().subscribe(
      data=>{
        this.client=data;
        for(let i=0 ; i< this.client._embedded.clients.length; i++) {
          if (this.client._embedded.clients[i].email == credentials.email) {
              this.emailexiste=true;
              break;
          }
          else{
            this.emailexiste=false;
          }
        }
        },
      err=>{console.log("probleme reseau")}
    )
    if(this.emailexiste==false){
      this.serviceClient.ajouteClient(credentials).subscribe(
        data=>{
          console.log("contact ajouter avec succés");
          localStorage.setItem('token', credentials.email);
          this.router.navigate(['profil']);
        },
        err=>{
          console.log("Probleme de saisir! essayez une autre fois.");
        }
      )
    }
  }






}
