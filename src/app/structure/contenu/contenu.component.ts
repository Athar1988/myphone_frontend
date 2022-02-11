import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {Router} from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {ClientService} from '../../services/client.service';
import {CommandeService} from '../../services/commande.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent implements OnInit {
  categories;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    margin:10,
    center:true,
    dots:true,
    // navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  produits;
  nombreProduits;
  client;
  nombreclient;
  commande;
  nombrecommande;
  promoProduit;
  dispoProduit;



  constructor(private catService:CategoriesService,
              private clientService:ClientService,
              private commandeService:CommandeService,
              private router:Router) { }

  ngOnInit(): void {
    this.getCategories();
    this.catService.getTousProduits().subscribe(
      data=>{
        this.produits=data;
        this.nombreProduits=this.produits.page.totalElements;
      },
      err=>{console.log("erruer de reseau");}
    )


    this.catService.getTousProduitsFiltre('search/promoProducts').subscribe(
      data=>{
        this.promoProduit=data;
      },
      err=>{console.log("erruer de reseau");}
    )



    this.catService.getTousProduitsFiltre('search/dispoProducts').subscribe(
      data=>{
        this.dispoProduit=data;
      },
      err=>{console.log("erruer de reseau");}
    )



    this.clientService.recupererTousClient().subscribe(
      data=>{
        this.client=data;
        this.nombreclient=this.client.page.totalElements;
      },
      err=>{console.log("erruer de reseau");}
    )



    this.commandeService.recupereItemCommander().subscribe(
      data=>{
        this.commande=data;
        this.nombrecommande=this.commande.page.totalElements;
      },
      err=>{console.log("erruer de reseau");}
    )
  }


  onProductDetails(id) {
    this.router.navigateByUrl("detail/"+id);
  }

  getProductsByCat(id) {
      this.router.navigateByUrl("products/2/"+id);
  }


  private getCategories() {
    this.catService.getProduitdeCategorie(environment.backendServer+"categories")
      .subscribe(data=>{
        this.categories=data;
      },err=>{
        console.log("erreur de reseau");
      })
  }

}
