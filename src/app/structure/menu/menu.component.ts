import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {PanierService} from '../../services/panier.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  motarechercher='';
  products;
  token=false;
  nbItem;
  panier=[];
  constructor(public service: CategoriesService,
              public serviceClient: ClientService,
              public router:Router,
              public panierService:PanierService) { }

  ngOnInit(): void {
    this.serviceClient.clientConnecter();
    if(this.serviceClient.connected==true){
      this.token==true;
      //this.nomClient=this.serviceClient.clientactuel.nom;
    }
    this.panier = JSON.parse(localStorage.getItem('panier'));
    this.nbItem=this.panier.length;
  }



  chercherUnProduit(credentials) {
    console.log("/chercher/"+credentials.motarechercher);
    this.router.navigateByUrl("/chercher/"+credentials.motarechercher);
  }

  accueil(){
    this.router.navigateByUrl('');
  }




  onProductsPromo() {
    this.router.navigateByUrl("/products/1/1");
  }
  onProductsDispo() {
    this.router.navigateByUrl("/products/1/2");
  }
  topoffre(){
    this.router.navigateByUrl("/products/1/3");
  }
  dernierajoute(){
    this.router.navigateByUrl("/products/1/4");
  }



  nosmagasins(){
    this.router.navigateByUrl("/nosMagasin");
  }

  contact(){
    this.router.navigateByUrl("/contact");
  }

  Uncompte(){
    this.router.navigateByUrl("/compte");
  }

  Deconnecter() {
    this.serviceClient.logout();
    this.router.navigateByUrl('/compte');
  }

  affichePanier() {
    this.router.navigateByUrl('/panier');
  }
}
