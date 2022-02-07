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


  loginemailexiste;
  loginmotdepasse;
  loginemail;
  panier=[];
  client:any;
 //panier = new panier([]);

  constructor(private serviceClient: ClientService  ,
              private router:Router) { }

  ngOnInit(): void {
  }

  Connexion(credentials: any) {
    // verifier le login
    this.serviceClient.recupererTousClient().subscribe(
      data=>{
        this.client=data;
        for(let i=0 ; i< this.client._embedded.clients.length; i++) {
          if (this.client._embedded.clients[i].email == credentials.loginemail && this.client._embedded.clients[i].motdepasse == credentials.loginmotdepasse) {
            this.loginemailexiste=true;
            console.log(this.loginemailexiste);
            localStorage.setItem('mail', credentials.loginemail);
            localStorage.setItem('id', this.client._embedded.clients[i].id);
            //this.panier.push(null);
            localStorage.setItem('panier', JSON.stringify(this.panier));
            this.panier = JSON.parse(localStorage.getItem('panier'));
            localStorage.setItem('item', JSON.stringify(this.panier.length));
            this.router.navigate(['/profil/'+this.client._embedded.clients[i].id]);
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

  inscription() {
    this.router.navigate(['inscription']);
  }
}
