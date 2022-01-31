import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommandeService} from '../../services/commande.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit {
  idCommande;
  detailCommande;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private commandeService:CommandeService) { }

  ngOnInit(): void {
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

}
