import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';
import {Product} from '../../model/product.model';
import {HttpClient} from '@angular/common/http';
import {AdminService} from '../../services/admin.service';

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
  promotion=true;
  available=true;
  selectedFile: File;
  message;
  imageName: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;


  constructor(private router:Router,
              private route:ActivatedRoute,
              public catalService:CategoriesService,
              private httpClient: HttpClient,
              private adminService:AdminService) { }

  ngOnInit() {
    //recupere le produits
    this.admin=localStorage.getItem('admin');
    this.idproduit=this.route.snapshot.params.id;
    this.catalService.getProduitdeCategorie(this.catalService.host+"/products/"+this.idproduit)
      .subscribe(data=>{
        this.currentProduct=data;
      },err=>{
        console.log(err);
      })
  }


//Gets called when the user selects an image
  public onFileChanged(event) {
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
 /* getImage(id) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + id)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.retrieveResonse.picByte;
          console.log(this.retrievedImage+" eeeeee");
        }
      );
  }*/


  //Gets called when the user clicks on retieve image button to get the image from back end
 /* getImage1(id) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get("http://localhost:8080/products/"+id)
      .subscribe(
        (data)=>{
          this.retrieveResonse = data;
          console.log(this.retrieveResonse.nameImage);
          this.getImage(this.retrieveResonse.id);
          /* this.base64Data = this.retrieveResonse.picByte;
           this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
           console.log(this.retrievedImage);*/
     /*  },
      );
  }
*/

  onPromo(isChecked) {
    this.promotion = isChecked;
    //this.promotion = false;
    console.log(this.promotion);
  }


  onDispo(isChecked){
    this.available = isChecked;
    console.log(this.available);
  }



  ModifierProduit(p: Product, currentProduct) {
    this.currentProduct=new Product(currentProduct.id,p.name,p.description,p.marque,p.currentPrice, p.pourcentage,this.promotion, this.available ,p.quantity,currentProduct.nameImage,currentProduct.typeImage, currentProduct.picByte );
    this.adminService.updateProduit(this.currentProduct).subscribe(
      data=>{console.log("produits modifier avec succé")},
      err=>{console.log("probleme de modification")},
    )
    location.reload();
  }


}
