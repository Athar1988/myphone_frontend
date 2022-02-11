import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-liste-message',
  templateUrl: './liste-message.component.html',
  styleUrls: ['./liste-message.component.css']
})
export class ListeMessageComponent implements OnInit {
  tousMessage;
  p: number = 1;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
   this.clientService.recupereMessage().subscribe(
     data=>{this.tousMessage=data},
     err=>{console.log("probleme de reseau")}
   )
  }

  supprimerMessage(id: any) {
    this.clientService.supprimerMessage(id).subscribe(
      data=>{console.log("Message supprimer")},
      err=>{console.log("probleme de reseau")}
    )
    location.reload();
  }
}
