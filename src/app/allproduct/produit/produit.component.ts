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
  listeItem: any;
  panier=[];
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    public  clientservice:ClientService,
    public  panierservice:PanierService,
    ) { }


  ngOnInit() {}


  ajouterItem(produit: Product){
    this.productItem= new Item(null, produit.name ,produit.photoName,produit.currentPrice,produit.pourcentage,1 );
    if(localStorage && localStorage.getItem('panier')){
    this.panier = JSON.parse(localStorage.getItem('panier'));
    this.panier.push(this.productItem);
    localStorage.setItem('panier', JSON.stringify(this.panier));
    location.reload();
    }

    this.clientservice.sauvgarderItem(this.productItem).subscribe(
      data=>{
        console.log("produit ajouter avec succés");
      },
      err=>{
        console.log("Probleme de saisir! essayez une autre fois.");
      }
    );
  }






 /* onEditPhoto(p) {
    this.currentProduct=p;
    this.editPhoto=true;
  }*/


 /* onSelectedFile(event) {
    this.selectedFiles=event.target.files;
  }*/


  /*uploadPhoto() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0)
    this.catService.uploadPhotoProduct(this.currentFileUpload, this.currentProduct.id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        //console.log(this.router.url);
        //this.getProducts(this.currentRequest);
        //this.refreshUpdatedProduct();
        this.currentTime=Date.now();
      }
    },err=>{
      alert("Problème de chargement");
    })

    this.selectedFiles = undefined
  }

  onAddProductToCaddy(p:Product) {
    if(!this.authService.isAuthenticated()){
      this.router.navigateByUrl("/login");
    }
    else{
      this.caddyService.addProduct(p);
    }
  }
*/



  /*getTS() {
    return this.currentTime;
  }*/

  onProductDetails(p) {
    this.router.navigateByUrl("/detail/"+p.id);
  }
}
