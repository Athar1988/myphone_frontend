import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  products;
  editPhoto: boolean;
  currentProduct: any;
  selectedFiles;
  progress: number;
  currentFileUpload: any;
  title:string;
  currentRequest:string;
  private currentTime: number=0;






  cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },

  ];






  constructor(
    public catService:CategoriesService,
    private route:ActivatedRoute,private router:Router,
) { }
 // private caddyService:CaddyService,
 // private authService:AuthenticationServic
  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd ) {
        let url = val.url;
        let p1=this.route.snapshot.params.p1;
        console.log(p1);
        if(p1==1){
          this.title="Sélection";
          this.currentRequest='/products/search/selectedProducts';
          this.getProducts(this.currentRequest);
        }
        else if (p1==2){
          let idCat=this.route.snapshot.params.p2;
          this.title="Produits de la catégorie "+idCat;
          this.currentRequest='/categories/'+idCat+'/products';
          this.getProducts(idCat);
        }
        else if (p1==3){
          this.title="Produits en promotion";
          this.currentRequest='/products/search/promoProducts';
          this.getProducts(this.currentRequest);
        }
        else if (p1==4){
          this.title="Produits Disponibles";
          this.currentRequest='/products/search/dispoProducts';
          this.getProducts(this.currentRequest);
        }
        else if (p1==5){
          this.title="Recherche..";
          this.title="Produits Disponibles";
          this.currentRequest='/products/search/dispoProducts';
          this.getProducts(this.currentRequest);
        }

      }
    });
    let p1=this.route.snapshot.params.p1;
    if(p1==1){
      this.currentRequest='/products/search/selectedProducts';
      this.getProducts(this.currentRequest);
    }
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




  private refreshUpdatedProduct() {
    this.catService.getResource(this.currentProduct._links.self.href)
      .subscribe(data=>{
        console.log(data);
        this.currentProduct.photoName=data['photoName'];
      },err=>{
        console.log(err);
      })
  }

  onEditPhoto(p) {
    this.currentProduct=p;
    this.editPhoto=true;
  }

  onSelectedFile(event) {
    this.selectedFiles=event.target.files;
  }


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



  getTS() {
    return this.currentTime;
  }

  onProductDetails(p) {
    this.router.navigateByUrl("/detail/"+p.id);
  }
}