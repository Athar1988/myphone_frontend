import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-tous-produit',
  templateUrl: './tous-produit.component.html',
  styleUrls: ['./tous-produit.component.css']
})
export class TousProduitComponent implements OnInit {
  tousProduits:any;
  p: number = 1;


  private currentPage:number=1;
  private pageSize:number=20;
  private pages:Array<number>;

  constructor(private adminService:AdminService,
              private router: Router) { }

  ngOnInit(): void {
    this.recupereTousProduits();
  }


  recupereTousProduits(){
    this.adminService.tousProduits().subscribe(
      (data)=>{
        this.tousProduits=data;
        console.log(this.tousProduits._embedded.products[0]._links.category.href);
        this.pages=new Array<number>(this.tousProduits.page.totalPages);
      },
      (err)=>{console.log("probleme reseau");}
    )
  }


  onProduits(i:number) {
    this.currentPage=i+1;
    this.recupereTousProduits();
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
    /*this.adminService.modiiferProduit(produit).subscribe(
      data=>{console.log("produit supprimer avec succé");},
      err=>{console.log("probleme de connexion");}
    )*/
  }
}
