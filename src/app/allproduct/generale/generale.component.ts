import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-generale',
  templateUrl: './generale.component.html',
  styleUrls: ['./generale.component.css']
})
export class GeneraleComponent implements OnInit {
  categories;
  p1;p2;
  products;
  currentCategorie;
  title;
  currentRequest;
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
  host="https://bestphonebk.herokuapp.com/";
  constructor(public catService:CategoriesService,
              private  router:Router,
              private route:ActivatedRoute
  ){}


  ngOnInit(): void {
    this.getCategories();
    this.getProducts('products');
 this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd ) {
        let p1=this.route.snapshot.params.p1;
        let p2=this.route.snapshot.params.p2;
        if(p1==1){
          if(p2==1){
            this.title="Produit en Promotion";
            this.currentRequest='products/search/promoProducts';
            this.getProducts(this.currentRequest);
          }
          else if (p2==2){
            this.title="Produits Disponibles";
            this.currentRequest='products/search/dispoProducts';
            this.getProducts(this.currentRequest);
          }
        }

        else if (p1==2){
          let idCat=this.route.snapshot.params.p2;
          this.currentRequest='categories/'+idCat+'/products';
          this.products=[];
          this.catService.getProduitdeCategorie(this.host+this.currentRequest)
            .subscribe(data=>{
              this.products=data;
            },err=>{
              console.log(err);
            })
        }
      }
    });
  }


  private getCategories() {
    this.catService.getProduitdeCategorie(this.host+"categories")
      .subscribe(data=>{
        this.categories=data;
      },err=>{
        console.log(err);
      })
  }

  getProductsByCat(c) {
    this.currentCategorie=c;
    this.router.navigateByUrl('products/2/'+c.id);
  }


  private getProducts(requete) {
    this.catService.getProduitdeCategorie(this.host+requete)
      .subscribe(data=>{
        this.products=data;
      },err=>{
        console.log(err);
      })
  }

}
