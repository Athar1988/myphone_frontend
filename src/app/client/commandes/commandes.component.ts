import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../services/commande.service';
import {Commande} from '../../model/Commande';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

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
  total;

  nom;
  numeroCarte;
  date;
  CVC;
  condition;


  constructor(public commandeService:CommandeService,
              private route:ActivatedRoute,
              private router: Router) {}



  ngOnInit(): void {
    this.total=this.route.snapshot.params.somme;
    //récupérer la commande
    this.commande=JSON.parse(localStorage.getItem('commande'));
    this.currentDate = new Date();
    this.reference="ref"+this.commande.client.nom.substr(0,2)+this.commande.client.id;
    this.statut="Confirmer";
  }



  paiment(){
    this.commandeService.submitOrder().subscribe(
      (data)=>{console.log("commande ajouté avec succé");},
      (err)=>{console.log("erreur reseau");},
    )
   this.router.navigateByUrl('profil');

  }


}
