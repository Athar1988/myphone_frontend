import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Product} from '../../model/product.model';
import {ClientService} from '../../services/client.service';
import {PanierService} from '../../services/panier.service';
import {Item} from '../../model/Item';
import {MenuComponent} from '../../structure/menu/menu.component';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() products:any;
  title:string;
  productItem: any;
  nbItem;
  panier=[];
  sommeTotal=0;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    public  clientservice:ClientService,
    public  panierservice:PanierService,
    ) { }


  ngOnInit() {}




  ajouterItem(produit: Product){
    if(produit.pourcentage!=0){
      this.sommeTotal=produit.currentPrice-(produit.currentPrice*(produit.pourcentage/100));
    }
    else{
      this.sommeTotal=produit.currentPrice;
    }
    this.productItem= new Item(null, produit.name ,produit.currentPrice,produit.pourcentage,1, this.sommeTotal, produit.nameImage, produit.typeImage,produit.picByte);
   // if(localStorage && localStorage.getItem('panier')){
   // this.panier = JSON.parse(localStorage.getItem('panier'));
    //this.panier.push(this.productItem);
   // localStorage.setItem('panier', JSON.stringify(this.panier));
    this.nbItem = JSON.parse(localStorage.getItem('item'));
    localStorage.setItem('item', this.nbItem+1);
    location.reload();
   // }
    this.panierservice.sauvgarderItem(this.productItem).subscribe(
      data=>{
        console.log("produit ajouter avec succés");
      },
      err=>{
        console.log("Probleme de saisir! essayez une autre fois.");
      }
    );
  }

  onProductDetails(id) {
    this.router.navigateByUrl("/detail/"+id);
  }
}
