import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {AdminService} from '../../services/admin.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {

  nom;
  description;
  marque;
  pourcentage=0;
  currentPrice;
  promotion=false;
  available=true;
  quantity;
  categorie;
  produit;




  constructor(private  adminSrvice:AdminService,
              private httpClient: HttpClient,
              private router:Router) { }

  ngOnInit(): void {
  }

  ajoutProduit(p, categorieId){
    console.log(p.name);
    console.log(p.quantity);
     this.produit=new Product(null, p.nom, p.description, p.marque,p.currentPrice,p.pourcentage, this.promotion,this.available,p.quantity, null, null, null);
     this.adminSrvice.ajouteProduit(this.produit,categorieId).subscribe(
      data=>{
        this.router.navigateByUrl('listeProduit/'+categorieId);
        console.log("produits ajouter avec succés");
        },
      err=>{console.log("probleme de reseau");}
    )
  }

  onPromo(isChecked) {
    this.promotion = isChecked;
    //this.promotion = false;
    console.log(this.promotion);
  }

  onDispo(isChecked){
    this.available = isChecked;
    console.log(this.available);
  }




/*
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload/1', uploadImageData, { observe: 'response' })
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
  getImage1() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/products/1/photo')
      .subscribe(
        (data)=>{
          this.retrieveResonse = data;
          console.log(this.retrieveResonse.name);
          this.getImage(this.retrieveResonse.name);
         /* this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          console.log(this.retrievedImage);*/
       /* },
      );
  }*/
}
