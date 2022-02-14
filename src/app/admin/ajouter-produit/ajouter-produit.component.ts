import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {AdminService} from '../../services/admin.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {

  nom;
  description;
  marque;
  pourcentage=0;
  currentPrice;
  promotion=false;
  available=true;
  quantity;
  categorie;
  produit;




  constructor(private  adminSrvice:AdminService,
              private httpClient: HttpClient,
              private router:Router) { }

  ngOnInit(): void {
  }

  ajoutProduit(p){
     this.produit=new Product(null, p.nom, p.description, p.marque,p.currentPrice,p.pourcentage, this.promotion,this.available,p.quantity, null, null, null);
     this.adminSrvice.ajouteProduit(this.produit,p.categorie).subscribe(
      data=>{
        this.router.navigateByUrl('listeProduit/admin/'+p.categorie);
        console.log("produits ajouter avec succés");
        },
      err=>{console.log("probleme de reseau");}
    )
  }

  onDispo(isChecked){
    this.available = isChecked;
    console.log(this.available);
  }

}
