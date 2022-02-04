import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {Router} from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent implements OnInit {

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
  constructor(private catService:CategoriesService,
              private router:Router) { }

  ngOnInit(): void {
    this.catService.getTousProduits().subscribe(
      data=>{
        this.produits=data;
        console.log(this.produits);
      },
      err=>{console.log("erruer de reseau");}
    )
  }

  onProductDetails(id) {
    this.router.navigateByUrl("/detail/"+id);
  }

}
