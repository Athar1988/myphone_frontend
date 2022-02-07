import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommandeService} from '../../services/commande.service';
import loader from '@angular-devkit/build-angular/src/angular-cli-files/plugins/single-test-transform';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {
  admin;
  commandes:any;
  ItemCommandes;
  listeItem:any;
  terminer=false;
  encours=false;
  listeCommande=[];
  listeCommandeEncours=[];
  listeCommandeAnnuler=[];
  listeCommandeTraiter=[];
  client;
  constructor(private router: Router,
              private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.admin=localStorage.getItem('admin');
    if(this.admin==undefined){
      this.commandeService.recupereListeCommande().subscribe(
        data=>{this.commandes=data;
          console.log(this.commandes);},
        err=>{console.log(err);})
    }


    if(this.admin=='true') {
      this.commandeService.recupereItemCommander().subscribe(
        data => {
          console.log(data);
         this.commandes = data;
         for(let encours of this.commandes._embedded.commandes ){
           /*if(encours.statut=="En cours"){
             this.listeCommande.push(encours);
           }*/
           this.listeCommande.push(encours);
           switch (encours.statut) {
             case "En cours":
               this.listeCommandeEncours.push(encours);
               break;
             case "Terminer":
               this.listeCommandeTraiter.push(encours);
               break;
           }

         }
        },
        err => {
          console.log(err);
        })
    }
  }


  detailCommande(id) {
  this.router.navigateByUrl('/detailCommande/'+id);
  }


  detailClient(id) {
    this.commandeService.recupererClientCommander(id).subscribe(
      (data)=>{
        this.client=data;
        this.router.navigateByUrl('/profil/'+this.client.id);
      },
      (err)=>{
        console.log("probleme de recupere le client");
      }
    )

  }


  ContinuerShopping() {
    this.router.navigateByUrl('/generale');
  }


  enCours() {
    console.log(this.listeCommandeEncours);
    this.encours=true;
    this.terminer=false;
  }

  traiter() {
    console.log(this.listeCommandeTraiter);;
    this.encours=false;
    this.terminer=true;
  }

  suiviCommandes() {
    location.reload();
  }

  supprimerCommande(id) {
    console.log(id+" supp");
    this.commandeService.supprimerCommande(id).subscribe(
      data=>{console.log("commande supprimer avec succe")},
      err=>{console.log("probleme de reseau")}
    )
    location.reload();
  }
}
