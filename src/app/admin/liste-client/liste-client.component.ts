import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {
  tousClient;
  p: number = 1;
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService.recupererTousClient().subscribe(
      data=>{this.tousClient=data},
      err=>{console.log("probleme de reseau")}
    )
  }

  supprimerClient(id: any) {
    this.clientService.supprimerClient(id).subscribe(
      data=>{console.log("Message supprimer")},
      err=>{console.log("probleme de reseau")}
    )
    location.reload();
  }

}
