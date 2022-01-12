import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() products:any;
  editPhoto: boolean;
  currentProduct: any;
  selectedFiles;
  progress: number;
  currentFileUpload: any;
  title:string;
  currentRequest:string;
  private currentTime: number=0;


  constructor(
    public catService:CategoriesService,
    private route:ActivatedRoute,private router:Router,
) { }
 // private caddyService:CaddyService,
 // private authService:AuthenticationServic
  ngOnInit() {

console.log(this.products+" les produits");

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
