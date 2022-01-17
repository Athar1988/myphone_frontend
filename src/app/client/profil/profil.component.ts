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


  constructor(private route: ActivatedRoute,
              private serviceClient: ClientService) { }


  ngOnInit(): void {
    // recupere le client token
    this.serviceClient.clientConnecter();
    console.log(this.serviceClient.clientactuel.nom+ " le nom de client connecter profil");


  }

}
