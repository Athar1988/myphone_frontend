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
  emailexiste;
  client:any;
  constructor(private serviceClient: ClientService  ,
              private router:Router) { }

  ngOnInit(): void {
  }

  ajoutClient(credentials: Client, InscriptionForm:NgForm) {
    this.serviceClient.recupererTousClient().subscribe(
      data=>{
        this.client=data;
        if(this.client._embedded.clients.length==0){
          this.emailexiste=false;
      }
      else{
        for(let i=0 ; i< this.client._embedded.clients.length; i++) {
          if (this.client._embedded.clients[i].email == credentials.email) {
            this.emailexiste=true;
            break;
          }
          else{
            this.emailexiste=false;
          }
        }
      }
      },
      err=>{console.log("probleme reseau")}
    )

   if(this.emailexiste==false){
      this.serviceClient.sauvgarderClient(credentials).subscribe(
        data=>{
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
