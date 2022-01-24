import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Product} from '../../model/product.model';
import {ClientService} from '../../services/client.service';
import {PanierService} from '../../services/panier.service';
import {Item} from '../../model/Item';

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

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    public  clientservice:ClientService,
    public  panierservice:PanierService
    ) { }


  ngOnInit() {}


  ajouterItem(produit: Product){
    //ajouter le item au recervoire de client
    console.log(produit.name+" gggg "+produit.currentPrice)
    this.productItem= new Item(null, produit.name ,produit.photoName,produit.currentPrice,produit.pourcentage,1,1254 );
    /*this.productItem.name=produit.name;
    this.productItem.prixUn=produit.currentPrice;
    this.productItem.quantiteCommander=1;
    this.productItem.image=produit.photoName;;
    this.productItem.pourcentage=produit.pourcentage
    this.productItem.prixtotalproduit=this.productItem.quantiteCommander* this.productItem.prixUn;*/
    // recupere le nombre des item +1 --> ajouter item au token
    this.panierservice.recupereTousItem().subscribe(
      (data)=>{
        this.listeItem=data;
        //localStorage.removeItem('nbItem');
        //console.log(this.listeItem._embedded.productItems.length+1);
        localStorage.setItem('nbItem',this.listeItem._embedded.productItems.length+1);
      }
    )

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
