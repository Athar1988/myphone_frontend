import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Item} from '../../model/Item';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  idClient;
  Items;



  headers = ["ID", "Name", "Age", "Gender", "Country"];



  rows = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Age" : "21",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "2",
      "Name" : "Ajay",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
]


  constructor(public clinetService:ClientService ) { }

  ngOnInit(): void {
    this.idClient= localStorage.getItem('id');
    console.log(this.idClient+ "page panier");
    this.recupereProductItem(this.idClient);
  }

  terminerCommande(){

  }


  private recupereProductItem(idClient) {
    this.clinetService.recupereItemProduct(idClient).subscribe(
      (data)=>{
        this.Items=data;
        this.Items=this.Items._embedded.productItems;
        console.log(this.Items+" les items "+this.Items.length);
        for(let i=0 ; i< this.Items.length; i++) {
          console.log(this.Items[i].name + " ppppt")
        }
      },
      (err)=>{
        console.log("probleme reseau");
      }
    )
  }
}
