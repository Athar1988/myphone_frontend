import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommandeService} from '../../services/commande.service';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {
  p: number = 1;
  admin;
  commandes:any;
  terminer=false;
  encours=false;
  listeCommande=[];
  listeCommandeEncours=[];
  listeCommandeTraiter=[];
  client;
  constructor(private router: Router,
              private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.admin=localStorage.getItem('admin');
    if(this.admin==undefined){
      this.commandeService.recupereListeCommande().subscribe(
        data=>{this.commandes=data;},
        err=>{console.log(err);})
    }
    if(this.admin=='true') {
      this.commandeService.recupereItemCommander().subscribe(
        data => {
         this.commandes = data;
         for(let encours of this.commandes._embedded.commandes ){
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
    let idcoder=btoa( id);
    this.router.navigateByUrl('/detailCommande/'+idcoder);
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
    this.encours=true;
    this.terminer=false;
  }

  traiter() {
    this.encours=false;
    this.terminer=true;
  }

  suiviCommandes() {
    location.reload();
  }

  supprimerCommande(id) {
    this.commandeService.supprimerCommande(id).subscribe(
      data=>{console.log("commande supprimer avec succe")},
      err=>{console.log("probleme de reseau")}
    )
    location.reload();
  }
}
