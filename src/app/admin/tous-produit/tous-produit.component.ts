import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product.model';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-tous-produit',
  templateUrl: './tous-produit.component.html',
  styleUrls: ['./tous-produit.component.css']
})
export class TousProduitComponent implements OnInit {
  tousProduits:any;
  p: number = 1;
  currentRequest;
  categories;
  categorie;
  idCat=0;
  constructor(private adminService:AdminService,
              private router: Router,
              private route:ActivatedRoute,
              private catService:CategoriesService) { }

  ngOnInit(): void {
      this.idCat=this.route.snapshot.params.idCat;
      this.recupereTousProduits();
  }


  Selectcategorie(){
    this.idCat=this.idCat;
    if(this.idCat==0){
      this.recupereTousProduits();
    }
    else{
      this.recupereTousProduitsSelonCategorie(this.idCat);
    }
  }


  recupereTousProduitsSelonCategorie(idCat){
     /* this.catService.getUneCategorie(idCat).subscribe(
        data=>{this.categorie=data;},
        err=>{console.log("probleme de reseau")}
      )
*/
    this.currentRequest='/categories/'+idCat+'/products';
    console.log('/categories/'+idCat+'/products');
    this.catService.getProduitdeCategorie("http://localhost:8080"+this.currentRequest)
      .subscribe(data=>{
        this.tousProduits=data;
        console.log(this.tousProduits);

      },err=>{
        console.log(err);
      })
  }


  recupereTousProduits(){
    this.adminService.tousProduits().subscribe(
      (data)=>{
        this.tousProduits=data;
      },
      (err)=>{console.log("probleme reseau");}
    )
  }


  supprimerproduit(produit) {
    this.adminService.supprimerProduit(produit).subscribe(
      data=>{
        console.log("produit supprimer avec succé");
        // message de succe
        },
      err=>{console.log("probleme de connexion");}
    )
  }

  modifierproduit(produit:Product) {
    this.router.navigateByUrl('detail/'+produit.id);
  }
}
