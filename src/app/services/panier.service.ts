import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';
import {ClientService} from './client.service';
import {Observable} from 'rxjs';
import {Client} from '../model/client.model';
import {HttpClient} from '@angular/common/http';
import {Item} from '../model/Item';
import {Commande} from '../model/Commande';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public host:string="http://localhost:8080";
  idClient;
  panier;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  constructor(private http:HttpClient) { }


      recupereTousItem(){
        this.idClient=localStorage.getItem('id');
        return this.http.get("http://localhost:8080/clients/"+this.idClient+"/productItems");
        }


      updateQuantite(id,item): Observable<Item>{
      this.idClient=localStorage.getItem('id');
      return this.http.post<Item>("http://localhost:8080/productItems/"+this.idClient,item );
      }

      supprimerItem(id): Observable<Item>{
      return this.http.delete<Item>("http://localhost:8080/productItems/"+id );
      }


     sauvgarderItem(produitItem): Observable<Item>{
     this.idClient= localStorage.getItem('id');
     return this.http.post<Item>("http://localhost:8080/client/"+this.idClient+"/itemproduct", produitItem);
     }



  //Gets called when the user clicks on retieve image button to get the image from back end
  /*returnerImage(imageName) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get('http://localhost:8080/image/get/' + imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          console.log(this.retrievedImage+" eeeeee");
          return this.retrievedImage;
        }
      );
  }

*/
  //Gets called when the user clicks on retieve image button to get the image from back end
 /* recupereImage(id) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get('http://localhost:8080/products/'+id+'/photo')
      .subscribe(
        (data)=>{
          this.retrieveResonse = data;
          console.log(this.retrieveResonse.name);
        let  codeImage=this.returnerImage(this.retrieveResonse.name);
        return codeImage;
          /* this.base64Data = this.retrieveResonse.picByte;
           this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
           console.log(this.retrievedImage);
        },
      );
  }*/

}
