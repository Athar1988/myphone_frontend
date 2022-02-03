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
    //this.idClient=localStorage.getItem('id');
    let idClient=this.route.snapshot.params.idClient;
    this.serviceClient.recupererClient(idClient).subscribe(
      data=> {
        this.Client=data;
        console.log(this.Client.nom+ " le nom de client connecter profil");
      },
      err=>{ console.log("probleme de recupere un client");}

    )
  }

}
