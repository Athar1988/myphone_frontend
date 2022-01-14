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
  client:Client;


  constructor(private serviceClient: ClientService  ,
              private router:Router) { }

  ngOnInit(): void {
  }







  Connexion(value: any) {
    // verifier le login
    this.router.navigate(['profil']);
  }

  ajoutClient(client: Client) {
    //ssauvgarde Login
    /*this.login=new Login(client.email,client.motdepasse,false,true);
    this.serviceLogin.addLogin(this.login).subscribe(
      (newLogin)=> {console.log(this.login)},
      (error)=>{        console.log(error);}
    )*/
    // sauvgarde utilisateur
    this.serviceClient.addClient(client).subscribe(
      (data) => {
       // this.toaster.success(`Le cv de {utilisateur.nom} {utilisateur.prenom} a été ajuoté avec succès`);
        this.client=client;
        this.router.navigate(['profil', this.client.id]);
      },
      (erreur) => {
        console.log(erreur);
       // this.toaster.error(`Problème avec le serveur veuillez contacter l'admin`);
      }
    );
  }
}
