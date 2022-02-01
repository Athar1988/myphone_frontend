import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-tous-produit',
  templateUrl: './tous-produit.component.html',
  styleUrls: ['./tous-produit.component.css']
})
export class TousProduitComponent implements OnInit {
  tousProduits:any;
  p: number = 1;


  private currentPage:number=1;
  private pageSize:number=20;
  private pages:Array<number>;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.recupereTousProduits();
  }


  recupereTousProduits(){
    this.adminService.tousProduits().subscribe(
      (data)=>{
        this.tousProduits=data;
        console.log(this.tousProduits.page.totalPages);
        this.pages=new Array<number>(this.tousProduits.page.totalPages);
      },
      (err)=>{console.log("probleme reseau");}
    )
  }


  onProduits(i:number) {
    this.currentPage=i+1;
    this.recupereTousProduits();
  }

}
