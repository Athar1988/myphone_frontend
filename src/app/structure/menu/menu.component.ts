import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  motarechercher='';
  products;
  constructor(public service: CategoriesService,
              public router:Router) { }

  ngOnInit(): void {
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

}
