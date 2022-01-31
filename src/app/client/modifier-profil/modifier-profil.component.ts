import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent implements OnInit {
  Client;
  idClient;

  constructor(private serviceClient: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idClient=localStorage.getItem('id');
    this.Client=this.serviceClient.clientActuel( this.idClient);
  }

}
