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
  Client;
  admin;
  constructor(private route: ActivatedRoute,
              private serviceClient: ClientService) { }


  ngOnInit(): void {
    this.admin=localStorage.getItem('admin');
    if(this.admin=='true'){
      this.Client=this.route.snapshot.params.idClient;
    }
    else{
      this.Client=localStorage.getItem('id');
    }
    this.serviceClient.recupererClient( this.Client).subscribe(
      data=> {
        this.Client=data;
        console.log(this.Client.nom+ " le nom de client connecter profil");
      },
      err=>{ console.log("probleme de recupere un client");}

    )
  }

}
