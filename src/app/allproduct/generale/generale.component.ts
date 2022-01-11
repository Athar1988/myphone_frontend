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
  currentCategorie;

  constructor(public catService:CategoriesService,
              private  router:Router,
              ){}
              //public caddyService:CaddyService,
  //               public authService:AuthenticationService

  ngOnInit(): void {
    this.getCategories();
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

  onSelectedProducts() {
    this.currentCategorie=undefined;
    this.router.navigateByUrl("/products/1/0");
  }

  onProductsPromo() {
    this.currentCategorie=undefined;
    this.router.navigateByUrl("/products/3/0");
  }

  onProductsDispo() {
    this.currentCategorie=undefined;
    this.router.navigateByUrl("/products/4/0");
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
