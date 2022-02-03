import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit(): void {
  }


  accueil(){
    this.router.navigateByUrl('');
  }


  deconnecter() {
    localStorage.removeItem('admin');
    this.router.navigateByUrl('');

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

  listeProduit() {
    this.router.navigateByUrl('listeProduit');
  }
}
