import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/client.model';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {NgForm} from '@angular/forms';

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
  emailexiste=false;
  loginemailexiste;
  client:any;
  loginmotdepasse;
  loginemail;
  panier=[];
 //panier = new panier([]);

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
            localStorage.setItem('mail', credentials.loginemail);
            localStorage.setItem('id', this.client._embedded.clients[i].id);
            //this.panier.push(null);
            localStorage.setItem('panier', JSON.stringify(this.panier));
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



  ajoutClient(credentials: Client, InscriptionForm:NgForm) {
    this.serviceClient.recupererClient().subscribe(
      data=>{
        this.client=data;

        for(let i=0 ; i< this.client._embedded.clients.length; i++) {
          if (this.client._embedded.clients[i].email == credentials.email) {
            this.emailexiste=true;
            console.log(this.emailexiste+" eeeee");
            break;
          }
          else{
            this.emailexiste=false;
            console.log(this.emailexiste+" eeeee");
          }
        }
      },
      err=>{console.log("probleme reseau")}
    )
    if(this.emailexiste==false){
      console.log(this.emailexiste+" eeeee");
      this.serviceClient.sauvgarderClient(credentials).subscribe(
        data=>{
          console.log("contact ajouter avec succés");
          InscriptionForm.resetForm();
          this.router.navigate(['compte']);
        },
        err=>{
          console.log("Probleme de saisir! essayez une autre fois.");
        }
      )
    }
  }





}
