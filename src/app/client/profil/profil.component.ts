import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Client} from '../../model/client.model';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  email;
  idClient;
  Client;

  constructor(private route: ActivatedRoute,
              private serviceClient: ClientService) { }


  ngOnInit(): void {
    this.idClient=localStorage.getItem('id');
    // recupere le client token
    this.serviceClient.clientConnecter();
   this.Client=this.serviceClient.clientActuel( this.idClient)
    console.log(this.serviceClient.clientActuel( this.idClient).nom+ " le nom de client connecter profil");


  }

}
