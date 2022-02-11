import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {PanierService} from '../../services/panier.service';
import {NgForm} from '@angular/forms';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  motarechercher='';
  products;
  token=false;
  nbItem=0;
  panier=[];
  idclient;
  nb;
  motrechercher;
  constructor(public service: CategoriesService,
              public serviceClient: ClientService,
              public router:Router) { }

  ngOnInit(): void {
    this.serviceClient.clientConnecter();
    this.idclient=localStorage.getItem('id')
    if(this.serviceClient.connected==true){
      this.token==true;
    }
    this.nb = JSON.parse(localStorage.getItem('item'));
    if(this.nb>=0){
      this.nbItem = JSON.parse(localStorage.getItem('item'));
    }
    if(this.nb<0){
      this.nbItem =0;
    }
  }
  chercherUnProduit(motForm:NgForm) {
    this.motrechercher=motForm.value;
    motForm.reset();
    this.router.navigateByUrl("chercher/"+this.motrechercher.motarechercher);
  }
  accueil(){
    this.router.navigateByUrl('');
  }
  tousProduits(){
    this.router.navigateByUrl("generale");
  }
  onProductsPromo() {
    this.router.navigateByUrl("products/1/1");
  }
  onProductsDispo() {
    this.router.navigateByUrl("products/1/2");
  }
  nosmagasins(){
    this.router.navigateByUrl("nosMagasin");
  }
  contact(){
    this.router.navigateByUrl("contact");
  }
  Uncompte(){
    this.router.navigateByUrl("compte");
  }
  Deconnecter() {
    this.serviceClient.logout();
    this.router.navigateByUrl('');
  }
  affichePanier() {
    this.router.navigateByUrl('panier');
  }
  monProfil() {
    this.idclient=localStorage.getItem('id');
    this.router.navigateByUrl('profil/'+this.idclient);
  }
  mesCommandes() {
    this.router.navigateByUrl('listeCommandes');
  }
  modifierProfil() {
    this.router.navigateByUrl('Modifierprofil');
  }
}
