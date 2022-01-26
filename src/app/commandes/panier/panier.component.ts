import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Item} from '../../model/Item';
import {Router} from '@angular/router';
import {PanierService} from '../../services/panier.service';
import {Commande} from '../../model/Commande';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  providers: [DatePipe]
})
export class PanierComponent implements OnInit {
  idClient;
  Items;
  Commande= new Commande();
  total=0;

  constructor(public clinetService:ClientService,
              public panierService: PanierService,
              private router: Router
              ) {
  }


  ngOnInit(): void {
    this.idClient= localStorage.getItem('id');
    console.log(this.idClient+ "page panier");
    this.recupereProductItem(this.idClient);
  }

  terminerCommande(){
    let currentDate = new Date();
    this.Commande.date=currentDate;
    this.Commande.statut="Envoyer";
    for (let item of this.Items._embedded.productItems){
    console.log(item.name+"  les items commander");
    this.Commande.products.push(item);
    if(item.pourcentage!=0){
      this.total+=((item.quantiteCommander*item.prixUn)*(item.pourcentage/100));
    }
    else{
      this.total+=item.quantiteCommander*item.prixUn;
    }
  }
    this.Commande.client=this.clinetService.clientactuel;
    this.Commande.totalAmount=this.total;
    this.panierService.enregisterCommande(this.Commande).subscribe(
      (data)=>{console.log("commande enregister")},
      (err)=>{console.log(err);}
    )
    this.router.navigateByUrl('/commande');
  }


  private recupereProductItem(idClient) {
    this.clinetService.recupereItemProduct(idClient).subscribe(
      (data)=>{
        this.Items=data;
      },
      (err)=>{
        console.log("probleme reseau");
      }
    )
  }

  ContinuerShopping() {
    this.router.navigateByUrl('/generale');
  }



  modifierQuantit(id, item: Item, Q){
    item.quantiteCommander=Q;
    console.log(item);
    this.panierService.updateQuantite(id,item).subscribe(
      (data)=>{ console.log("item modifier avec succee avec succee");},
      (err)=>{ console.log("probleme de reseau");}
    );
  }

  supprimerItem(id){
  this.panierService.supprimerItem(id).subscribe(
    (data)=>{ console.log("item supprimer avec succee");},
    (err)=>{ console.log("probleme de reseau");}
  );
}
}
