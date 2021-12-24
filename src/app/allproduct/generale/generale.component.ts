import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category.model';
import {CategoriesService} from '../../services/categories.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-generale',
  templateUrl: './generale.component.html',
  styleUrls: ['./generale.component.css']
})
export class GeneraleComponent implements OnInit {
  title:string;
  currentRequest:string;
  products;
  categories;
  currentCategorie;


  constructor(public catService: CategoriesService,
              private  router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd ) {
        let url = val.url;
        let p1=this.route.snapshot.params.p1;
        if(p1==1){
          this.title="Sélection";
          this.currentRequest='/products/search/selectedProducts';
          this.getProducts(this.currentRequest);
        }
        else if (p1==2){
          let idCat=this.route.snapshot.params.p2;
          this.title="Produits de la catégorie "+idCat;
          this.currentRequest='/categories/'+idCat+'/products';
          console.log(idCat);
          this.getProducts(this.currentRequest);
        }
        else if (p1==3){
          this.title="Produits en promotion";
          this.currentRequest='/products/search/promoProducts';
          this.getProducts(this.currentRequest);
        }
        else if (p1==4){
          this.title="Produits Disponibles";
          this.currentRequest='/products/search/dispoProducts';
          this.getProducts(this.currentRequest);
        }
        else if (p1==5){
          this.title="Recherche..";
          this.title="Produits Disponibles";
          this.currentRequest='/products/search/dispoProducts';
          this.getProducts(this.currentRequest);
        }

      }
    });
    let p1=this.route.snapshot.params.p1;
    if(p1==1){
      this.currentRequest='/products/search/selectedProducts';
      this.getProducts(this.currentRequest);
    }

  }

  private getProducts(url) {
    this.catService.getResource(this.catService.host+url)
      .subscribe(data=>{
        this.products=data;
        console.log(this.products);
      },err=>{
        console.log(err);
      })
  }


  private getCategories() {
    this.catService.getResource(this.catService.host+"/categories")
      .subscribe(data=>{
        this.categories=data;
        console.log(this.categories);
      },err=>{
        console.log(err);
      })
  }

  getProductsByCat(c) {
    this.currentCategorie=c;
    this.router.navigateByUrl('/products/2/'+c.id);
  }


}
