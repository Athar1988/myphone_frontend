import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  motarechercher='';
  products;
  constructor(public service: CategoriesService) { }

  ngOnInit(): void {
  }



  chercherUnProduit(credentials) {
    console.log(credentials.motarechercher);
    this.service.chercherProduit(credentials.motarechercher).subscribe(
      data=>{
        console.log(data);
        this.products=data;
        console.log(this.products);
      }
    );

  }
}
