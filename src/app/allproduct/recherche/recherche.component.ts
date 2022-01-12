import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  products;
  constructor(private router:Router,
              private route:ActivatedRoute,
              private service:CategoriesService) { }

  ngOnInit(): void {
    this.produitsrechercher();
  }



  produitsrechercher() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd ) {
    let mc = this.route.snapshot.params.mc;
    console.log(mc + " mot de passe");
    this.service.chercherMarqueProduit(mc).subscribe(
      data => {
        this.products = data;
        console.log(this.products);
      }
    );
    this.service.chercherNameProduit(mc).subscribe(
      data => {
        this.products += data;
        console.log(this.products);
      }
    );

    this.service.chercherCategoryProduit(mc).subscribe(
      data => {
        this.products += data;
        console.log(this.products);
      }
    );


    this.service.chercherDescriptionProduit(mc).subscribe(
      data => {
        // console.log(data);
        this.products += data;
        console.log(this.products);
      }
    );

    console.log(this.products + " tous");

      }
    });
      }





onProductDetails(p) {
    this.router.navigateByUrl("/detail/"+p.id);
  }
}
