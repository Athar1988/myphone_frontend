import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  nom;
  prenom;
  telephone;
  sujet;
  message;

  constructor(private clientService:ClientService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ajoutContact(contact: any) {
    this.clientService.ajouterContact(contact).subscribe(
      data=>{console.log("contact envoyer avec succee")},
      err=>{console.log("probleme de reseau")},
    )
    this.router.navigateByUrl('');
  }
}
