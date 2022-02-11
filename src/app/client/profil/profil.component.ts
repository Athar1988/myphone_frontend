import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
      },
      err=>{ console.log("probleme de recupere un client");}
    )
  }

}
