import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../services/commande.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commande;
  currentDate;
  reference;
  statut;
  idclient;
  nom;
  numeroCarte;
  date;
  CVC;


  constructor(public commandeService:CommandeService,
              private route:ActivatedRoute,
              private router: Router,
              private clientService: ClientService) {}



  ngOnInit(): void {
    this.commande=JSON.parse(localStorage.getItem('commande'));
    this.currentDate = new Date();
    this.reference="ref"+this.commande.client.nom.substr(0,2)+this.commande.client.id;
  }


  ContinuerShopping() {
    this.router.navigateByUrl('/generale');
  }

  paiment(){
    this.commandeService.submitOrder().subscribe(
      (data)=>{console.log("commande ajouté avec succé");},
      (err)=>{console.log("erreur reseau");},
    )
    this.router.navigateByUrl('listeCommandes');
    this.idclient=localStorage.getItem('id');
    this.clientService.supprimerTousItem(this.idclient).subscribe(
      (data)=>{console.log("items supprimés")},
      (err)=>{console.log("probleme reseau ")}
    )

  }

}
