import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommandeService} from '../../services/commande.service';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {

  commandes:any;
  listeItem:any;
  constructor(private router: Router,
              private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandeService.recupereListeCommande().subscribe(
      data=>{this.commandes=data;
      console.log(this.commandes);},
        err=>{console.log(err);})
  }


  detailCommande(id) {
  this.router.navigateByUrl('/detailCommande/'+id);
  }
}
