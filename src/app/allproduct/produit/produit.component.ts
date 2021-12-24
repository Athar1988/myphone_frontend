import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

@Input() item= '';
  products;
  constructor(public catService: CategoriesService,
              private  router:Router,
              private route:ActivatedRoute
              ) { }

  ngOnInit() {
    console.log(this.item+ "sssss");
    //this.getProducts(this.idcategorie);
  }


  private getProducts(id) {
    this.catService.getResource("http://localhost:8080/categories/"+id+"/products")
      .subscribe(data=>{
        this.products=data;
        console.log(this.products);

      },err=>{
        console.log(err);
      })
  }

}
