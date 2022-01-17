import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }

 /* public addProduct(product:Product){
    this.addProductToCaddy(product.id,product.name,product.currentPrice,product.quantity)
    this.saveCaddy();
  }*/

 /* public addProductToCaddy(id:number,name:string,price:number,quantity:number):void{
    let caddy=this.caddies[this.currentCaddyName];
    let item=caddy.items[id];
    if(item===undefined) {
      item=new ItemProduct();item.id=id;item.name=name;
      item.price=price;item.quantity=quantity;
      caddy.items[id]=item;
    }
    else{
      item.quantity+=quantity;
    }
  }*/


  /*saveCaddy() {
    let caddy=this.caddies[this.currentCaddyName];
    localStorage.setItem("myCaddy_"+this.authService.authenticatedUser.username+"_"+this.currentCaddyName,JSON.stringify(caddy));
  }*/

}
