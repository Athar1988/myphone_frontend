import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/client.model';
import {NgForm} from '@angular/forms';
import {ClientService} from '../../services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  email;
  motdepasse;
  telephone;
  nom;
  prenom;
  ville;
  address;
  emailexiste=false;
  client:any;
  constructor(private serviceClient: ClientService  ,
              private router:Router) { }

  ngOnInit(): void {
  }


  ajoutClient(credentials: Client, InscriptionForm:NgForm) {
    this.serviceClient.recupererTousClient().subscribe(
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
