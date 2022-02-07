import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  categories;
  constructor(private  router: Router,
              private catService:CategoriesService) { }

  ngOnInit(): void {
    //recupere tous les catégories
    this.catService.getProduitdeCategorie(this.catService.host+"/categories")
      .subscribe(data=>{
        this.categories=data;
        console.log(this.categories);
      },err=>{
        console.log(err);
      })
  }


  deconnecter() {
    localStorage.removeItem('admin');
    this.router.navigateByUrl("admin");

  }

  ajouteProduit() {
  this.router.navigateByUrl('ajouteProduit');
  }

  suiviCommandes() {
    this.router.navigateByUrl('listeCommandes');
  }

  updatecontact() {
    this.router.navigateByUrl('modifierConatct')
  }

  listeProduit(c) {
    this.router.navigateByUrl('listeProduit/admin/'+c);
  }

  listeClient() {
    this.router.navigateByUrl('listeClient');
  }

  listeMessage() {
    this.router.navigateByUrl('listeMessage');
  }
}
