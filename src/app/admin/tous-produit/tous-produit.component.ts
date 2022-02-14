import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product.model';
import {CategoriesService} from '../../services/categories.service';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-tous-produit',
  templateUrl: './tous-produit.component.html',
  styleUrls: ['./tous-produit.component.css']
})
export class TousProduitComponent implements OnInit {
  host="https://bestphonebk.herokuapp.com/";
  tousProduits:any;
  p: number = 0;
  currentRequest;
  categories;
  motrechercher;
  motarechercher='';
  idCat=0;
  selectedFile: File;

  constructor(private adminService:AdminService,
              private httpClient: HttpClient,
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
    this.currentRequest='categories/'+idCat+'/products';
    this.catService.getProduitdeCategorie(this.host+this.currentRequest)
      .subscribe(data=>{
        this.tousProduits=data;
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
        },
      err=>{console.log("probleme de connexion");}
    )
    location.reload();
  }

  modifierproduit(produit:Product) {
    this.router.navigateByUrl('detail/'+produit.id);
  }



  chercherUnProduit(motForm:NgForm) {
    this.motrechercher=motForm.value;
    motForm.reset();
    this.router.navigateByUrl("/chercher/"+this.motrechercher.motarechercher);
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
    this.httpClient.post(this.host+'image/upload/'+idProduit, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            //this.message = 'Image uploaded successfully';
          } else {
           // this.message = 'Image not uploaded successfully';
          }
        }
      );
    location.reload();
  }
}
