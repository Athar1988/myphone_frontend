import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../../model/client.model';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent implements OnInit {
  Client;
  idClient;
  email;
  NewClient: Client;
  constructor(private serviceClient: ClientService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.idClient=localStorage.getItem('id');
    this.email=localStorage.getItem('mail');
    this.serviceClient.recupererClient(this.idClient).subscribe(
      data=> {
        this.Client=data;
      },
      err=>{ console.log("probleme de recupere un client");}

    )
  }

  ModifierClient(credentials: Client) {
    this.NewClient= new Client (this.idClient, this.email,credentials.telephone, credentials.nom, credentials.prenom, credentials.ville, credentials.address,credentials.motdepasse );
    this.serviceClient.ModifierClient(this.NewClient).subscribe(
      data=> {console.log("client modifier avec succé");},
      err=> {console.log("probleme de reseau");}
    )
    this.router.navigateByUrl('profil');
  }
}
