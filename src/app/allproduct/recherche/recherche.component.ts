import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit  {
  productsMarque;
  productsName;
  productsDescription;
  products;
  constructor(private router:Router,
              private route:ActivatedRoute,
              private service:CategoriesService) { }

  ngOnInit(): void {
    let mc = this.route.snapshot.params.mc;
    this.chercherMarqueProduit(mc);
    this.chercherNameProduit(mc);
    this.chercherDescriptionProduit(mc);
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd ) {
        let mc = this.route.snapshot.params.mc;
        this.chercherMarqueProduit(mc);
        this.chercherNameProduit(mc);
        this.chercherDescriptionProduit(mc);
      }
    });
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

  chercherDescriptionProduit(mc){
        this.service.chercherDescriptionProduit(mc).subscribe(
          data => {
            this.productsDescription= data;
          }
        );
      }

}
