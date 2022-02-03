import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommandeService} from '../../services/commande.service';
import {Commande} from '../../model/Commande';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit {
  admin;
  idCommande;
  detailCommande;
  client;
  commande: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private commandeService:CommandeService) { }

  ngOnInit(): void {
    this.admin=localStorage.getItem('admin');
    this.idCommande=this.route.snapshot.params.idCommande;
    console.log(this.idCommande);
    this.commandeService.recuperedetailCommande(this.idCommande).subscribe(
      (data)=>{this.detailCommande=data; console.log(this.detailCommande)},
      (error)=>{console.log("probleme de reseau")},
    )

  }

  onProductDetails(id) {
    this.router.navigateByUrl("/detail/"+id);
  }


  validerCommande(idCommande) {
    this.commandeService.recupereCommande(idCommande).subscribe(
      data=>{
        this.commande=data;
        console.log(this.commande+" rrrrr");
        this.commandeService.traiterCommande(idCommande, this.commande).subscribe(
          data=>{console.log("commande traiter avec succé")},
          err=>{console.log("probleme de connexion")}
        )
this.router.navigateByUrl('listeCommandes');
        },
      err=>{console.log("erruer de reseau")},
    )





  }
}
