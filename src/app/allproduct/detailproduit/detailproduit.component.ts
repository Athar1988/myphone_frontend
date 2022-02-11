import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';
import {Product} from '../../model/product.model';
import {HttpClient} from '@angular/common/http';
import {AdminService} from '../../services/admin.service';
import {Item} from '../../model/Item';
import {PanierService} from '../../services/panier.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  currentProduct;
  categorie;
  admin;
  idproduit;
  promotion=true;
  available=true;
  idclient;
  message;
  sommeTotal=0;
  productItem: any;
  nbItem;
  host=environment.backendServer;


  constructor(private router:Router,
              private route:ActivatedRoute,
              public catalService:CategoriesService,
              private httpClient: HttpClient,
              private adminService:AdminService,
              public  panierservice:PanierService) { }

  ngOnInit() {
    this.idclient=localStorage.getItem('id');
    this.admin=localStorage.getItem('admin');
    this.idproduit=this.route.snapshot.params.id;
    this.catalService.getProduitdeCategorie(this.host+"products/"+this.idproduit)
      .subscribe(data=>{
        this.currentProduct=data;
      },err=>{
        console.log(err);
      })
  }


  ajouterItem(produit: Product){
    if(produit.pourcentage!=0){
      this.sommeTotal=produit.currentPrice-(produit.currentPrice*(produit.pourcentage/100));
    }
    else{
      this.sommeTotal=produit.currentPrice;
    }
    this.productItem= new Item(produit.id, produit.name ,produit.currentPrice,produit.pourcentage,1, this.sommeTotal, produit.nameImage, produit.typeImage,produit.picByte);
    this.nbItem = JSON.parse(localStorage.getItem('item'));
    localStorage.setItem('item', this.nbItem+1);
    location.reload();
    this.panierservice.sauvgarderItem(this.productItem).subscribe(
      data=>{
        console.log("produit ajouter avec succés");
      },
      err=>{
        console.log("Probleme de saisir! essayez une autre fois.");
      }
    );
  }


  onPromo(isChecked) {
    this.promotion = isChecked;
  }


  onDispo(isChecked){
    this.available = isChecked;
  }


  ModifierProduit(p, currentProduct) {
    this.currentProduct=new Product(currentProduct.id,p.name,p.description,p.marque,p.currentPrice, p.pourcentage,this.promotion, this.available ,p.quantity,currentProduct.nameImage,currentProduct.typeImage, currentProduct.picByte );
    this.adminService.updateProduit(this.currentProduct, p.categorie).subscribe(
      data=>{console.log("produits modifier avec succé")},
      err=>{console.log("probleme de modification")},
    )
    this.router.navigateByUrl('listeProduit/admin/0');
  }




}
