import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommandeService} from '../../services/commande.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit {
  admin;
  idCommande;
  detailCommande;
  iddecoder;
  client;
  commande: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private commandeService:CommandeService) { }

  ngOnInit(): void {
    this.admin=localStorage.getItem('admin');
    this.idCommande=this.route.snapshot.params.idCommande;
    this.iddecoder=atob(this.idCommande)
    this.commandeService.recuperedetailCommande(this.iddecoder).subscribe(
      (data)=>{this.detailCommande=data;},
      (error)=>{console.log("probleme de reseau")},
    )
  }

  onProductDetails(id) {
    this.router.navigateByUrl("detail/"+id);
  }


  validerCommande(idCommande) {
    this.commandeService.recupereCommande(idCommande).subscribe(
      data=>{
        this.commande=data;
        this.commandeService.traiterCommande(idCommande, this.commande).subscribe(
          data=>{console.log("commande traiter avec succé")},
          err=>{console.log("probleme de connexion")}
        )
       this.router.navigateByUrl('listeCommandes/admin');
        },
      err=>{console.log("erruer de reseau")},
    )
  }

}
