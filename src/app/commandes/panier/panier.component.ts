import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Item} from '../../model/Item';
import {Router} from '@angular/router';
import {PanierService} from '../../services/panier.service';
import {Commande} from '../../model/Commande';
import { DatePipe } from '@angular/common';
import {CommandeService} from '../../services/commande.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  providers: [DatePipe]
})
export class PanierComponent implements OnInit {
  Items;
  productItem: any;
  public commande: Commande = new Commande();
  total=0;
  panier;
  constructor(public clinetService:ClientService,
              public panierService: PanierService,
              private router: Router,
              private commandeService:CommandeService
              ) {}

  ngOnInit(): void {
    this.recupereProductItem();
  }



  CreationCommande(){
    //let currentDate = new Date();
    //this.commande.date=currentDate;
    //this.commande.statut="Envoyer";
    let i=0;
    this.commande.client=this.clinetService.clientactuel;
   /* for (let item of this.Items._embedded.productItems) {
      if (item.pourcentage != 0) {
        this.total += ((item.quantiteCommander * item.prixUn) * (item.pourcentage / 100));
      }
      else {
        this.total += item.quantiteCommander * item.prixUn;
      }
    }
*/

    this.commandeService.submitOrder(this.commande).subscribe(
      (data)=>{console.log("commande ajouté avec succé");},
      (err)=>{console.log("erreur reseau");},
    )

/*
    for (let item of this.Items._embedded.productItems) {
      if (item.pourcentage != 0) {
        this.total += ((item.quantiteCommander * item.prixUn) * (item.pourcentage / 100));
      }
      else {
        this.total += item.quantiteCommander * item.prixUn;
      }
    }
    this.Commande.totalAmount=this.total;
    // enregistrer data - somme total - client -
    this.panierService.enregisterCommande(this.Commande).subscribe(
      (data)=>{console.log("commande enregister")},
      (err)=>{console.log(err);}
    )
    //ajouter les items
    /*for (let item of this.Items._embedded.productItems) {
      this.panierService.ajouterItemCommande(item, this.Commande).subscribe(
        (data) => {
          console.log("commande ajouter au item")
        },
        (err) => {
          console.log(err);
        }
      )
    }*/

      /*this.Commande.products.push(item);
      if(item.pourcentage!=0){
        this.total+=((item.quantiteCommander*item.prixUn)*(item.pourcentage/100));
      }
      else{
        this.total+=item.quantiteCommander*item.prixUn;
      }
    }*/



    //redirection
    this.router.navigateByUrl('/commande');
  }


  private recupereProductItem() {
    this.panierService.recupereTousItem().subscribe(
      (data)=>{this.Items=data;
        for (let item of this.Items._embedded.productItems) {
  this.productItem= new Item(item.id, item.name,item.photoName,item.currentPrice,item.pourcentage,item.quantiteCommander );
          console.log(this.productItem);
          this.commande.products.push(this.productItem);
          console.log(this.commande.products[0]+" eeee");
        }
      },
      (err)=>{console.log("probleme reseau");}
    )
  }

  ContinuerShopping() {
    this.router.navigateByUrl('/generale');
  }



  modifierQuantit(id, item: Item, Q){
    item.quantiteCommander=Q;
    this.panierService.updateQuantite(id,item).subscribe(
      (data)=>{ console.log("item modifier avec succee avec succee");},
      (err)=>{ console.log("probleme de reseau");}
    );
  }

  supprimerItem(id){
  this.panierService.supprimerItem(id).subscribe(
    (data)=>{
      this.panier = JSON.parse(localStorage.getItem('panier'));
      localStorage.setItem('item', JSON.stringify(this.panier.length-1));
      console.log("item supprimer avec succee");
      },
    (err)=>{ console.log("probleme de reseau");}
  );
}
}
