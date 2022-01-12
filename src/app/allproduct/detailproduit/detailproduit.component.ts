import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  currentProduct;
  stock:string;

  constructor(private router:Router,
              private route:ActivatedRoute,
              public catalService:CategoriesService) { }

  ngOnInit() {
    let id=this.route.snapshot.params.id;
    this.catalService.getResource(this.catalService.host+"/products/"+id)
      .subscribe(data=>{
        this.currentProduct=data;
        console.log(this.currentProduct.photoName);
      },err=>{
        console.log(err);
      })
  }



  onAddProductToCaddy(p:Product) {
   /* if(!this.authService.isAuthenticated()){
      this.router.navigateByUrl("/login");
    }
    else{
      this.caddyService.addProduct(p);
    }*/
  }




}
