import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';
import {Product} from '../../model/product.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  currentProduct;
  stock:string;
  admin;
  idproduit;

  selectedFile: File;
  message;
  imageName: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;


  constructor(private router:Router,
              private route:ActivatedRoute,
              public catalService:CategoriesService,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.admin=localStorage.getItem('admin');
    this.idproduit=this.route.snapshot.params.id;
    this.catalService.getResource(this.catalService.host+"/products/"+this.idproduit)
      .subscribe(data=>{
        this.currentProduct=data;
        console.log(this.currentProduct.photoName);
      },err=>{
        console.log(err);
      })
  }



  onAddProductToCaddy(p:Product) {
   /* if(!this.authService.isAuthenticated()){
      this.router.navigateByUrl("/login");
    }
    else{
      this.caddyService.addProduct(p);
    }*/
  }

//Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload(idProduit) {
    console.log(this.selectedFile);
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload/'+idProduit, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
      );
  }
  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage(imageName) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          console.log(this.retrievedImage+" eeeeee");
        }
      );
  }


  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage1(id) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/products/'+id+'/photo')
      .subscribe(
        (data)=>{
          this.retrieveResonse = data;
          console.log(this.retrieveResonse.name);
          this.getImage(this.retrieveResonse.name);
          /* this.base64Data = this.retrieveResonse.picByte;
           this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
           console.log(this.retrievedImage);*/
        },
      );
  }
}
