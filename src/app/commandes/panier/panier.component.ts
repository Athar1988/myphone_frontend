import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Item} from '../../model/Item';
import {Router} from '@angular/router';
import {PanierService} from '../../services/panier.service';
import { DatePipe } from '@angular/common';
import {CommandeService} from '../../services/commande.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  providers: [DatePipe]
})
export class PanierComponent implements OnInit {
  Items=undefined;
  productItem: any;
  panier;
  total=0;
  prixsansremise=0;
  existe;
  nbItem;
  prixArticle;
  constructor(public clinetService:ClientService,
              public panierService: PanierService,
              private router: Router,
              private commandeService:CommandeService
              ) {}


  ngOnInit(): void {
    this.recupereProductItem();
    this.existe=localStorage.getItem('item');
  }



  CreationCommande(){
    this.commandeService.commande.client=this.clinetService.clientactuel;
    localStorage.setItem('commande',  JSON.stringify(this.commandeService.commande) );
    this.router.navigateByUrl('/commande');

  }

  ContinuerShopping() {
    this.router.navigateByUrl('/generale');
  }



  recupereProductItem() {
    this.panierService.recupereTousItem().subscribe(
      (data)=>{
        this.Items=data;
        for (let item of this.Items._embedded.productItems) {
          this.productItem=item;
          this.commandeService.commande.products.push(this.productItem);
          this.prixsansremise+=item.prixUn;
          this.total+=item.prixtotalproduit;
        }
      },
      (err)=>{console.log("probleme reseau");}
    )
  }



  modifierQuantit(id, item: Item, Q){
    item.quantiteCommander=Q;
    this.panierService.updateQuantite(id,item).subscribe(
      (data)=>{
        console.log("item modifier avec succé");
        location.reload();
        },
      (err)=>{ console.log("probleme de reseau");}
    );
  }

  supprimerItem(id){
  this.panierService.supprimerItem(id).subscribe(
    (data)=>{
      this.panier = JSON.parse(localStorage.getItem('panier'));
      this.nbItem = JSON.parse(localStorage.getItem('item'));
      this.nbItem  = Number(this.nbItem)-1 ;
      if(this.nbItem<0){
        this.nbItem=0;
      }
      localStorage.setItem('item', this.nbItem );
      location.reload();
      },
    (err)=>{ console.log("probleme de reseau");}
  );
}
}
