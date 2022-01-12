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
  categories;
  products;
  currentCategorie;
  title;
  currentRequest;
  constructor(public catService:CategoriesService,
              private  router:Router,
              private route:ActivatedRoute
              ){}
              //public caddyService:CaddyService,
  //               public authService:AuthenticationService

  ngOnInit(): void {
    this.getCategories();

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd ) {
        let url = val.url;
        let p1=this.route.snapshot.params.p1;
        let p2=this.route.snapshot.params.p2;
        console.log(p1);
        console.log(p2);
        if(p1==1){

          if(p2==1){
            this.title="Produit en Promotion";
            this.currentRequest='/products/search/promoProducts';
            this.getProducts(this.currentRequest);
          }
          else if (p2==2){
            this.title="Produits Disponibles";;
            this.currentRequest='/products/search/dispoProducts';
            this.getProducts(this.currentRequest);
          }
          else if (p2==3){
            this.title="top offre";
            this.currentRequest='/products/search/topOffre';
            this.getProducts(this.currentRequest);
          }
          else if (p2==4){
            this.title="dernier ajoute";
            this.currentRequest='/products/search/dernierAjoute';
            this.getProducts(this.currentRequest);
          }

        }
        else if (p1==2){
          let idCat=this.route.snapshot.params.p2;
          this.title="Produits de la catégorie "+idCat;
          this.currentRequest='/categories/'+idCat+'/products';
          this.getProducts(this.currentRequest);
        }

      }
    });
  /*  this.authService.loadUser();
    if(this.authService.isAuthenticated())
      this.caddyService.loadCaddyFromLocalStorage();*/
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


  private getProducts(requete) {
    this.catService.getResource("http://localhost:8080"+requete)
      .subscribe(data=>{
        this.products=data;
        console.log(this.products);

      },err=>{
        console.log(err);
      })
  }

  onLogin() {
    this.router.navigateByUrl('/login');
  }

  onLogout() {
  /*  this.caddyService.emptyCaddy();
    this.authService.logout();*/
    this.router.navigateByUrl('/login');
  }
}
