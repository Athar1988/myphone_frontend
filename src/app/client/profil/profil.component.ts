import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //recupere le client
    let id=this.route.snapshot.params.id;
    console.log(id);

    // token
  //  localStorage.setItem("authenticatedUser",JSON.stringify(this.utilisateurconnecter));
   // this.serviceClient.login(client);
  }

}
