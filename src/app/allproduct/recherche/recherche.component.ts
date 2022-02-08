import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit  {
  productsMarque;
  productsName;
  productsCategory;
  productsDescription;
  products;
  constructor(private router:Router,
              private route:ActivatedRoute,
              private service:CategoriesService) { }

  ngOnInit(): void {
    let mc = this.route.snapshot.params.mc;
    this.chercherMarqueProduit(mc);
    this.chercherNameProduit(mc);
   // this.chercherCategoryProduit(mc);
    this.chercherDescriptionProduit(mc);
  }




  chercherMarqueProduit(mc) {
    console.log(mc + " mot de passe");
    this.service.chercherMarqueProduit(mc).subscribe(
      data => {
        this.productsMarque = data;
        console.log(data);

      }
    );
  }

  chercherNameProduit(mc) {
    this.service.chercherNameProduit(mc).subscribe(
      data => {
        this.productsName= data;
      }
    );
  }


 /* chercherCategoryProduit(mc) {
    this.service.chercherCategoryProduit(mc).subscribe(
      data => {
        this.productsCategory= data;
      }
    );
  }*/

  chercherDescriptionProduit(mc){
        this.service.chercherDescriptionProduit(mc).subscribe(
          data => {
            this.productsDescription= data;
          }
        );
      }





onProductDetails(id) {
    this.router.navigateByUrl("/detail/"+id);
  }
}
