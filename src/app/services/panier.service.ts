import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';
import {ClientService} from './client.service';
import {Observable} from 'rxjs';
import {Client} from '../model/client.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public host:string="http://localhost:8080";
  idClient;


  constructor(public ClientService: ClientService,
              private http:HttpClient) { }


recupereTousItem(){
  this.idClient=localStorage.getItem('id');
  return this.http.get("http://localhost:8080/clients/"+this.idClient+"/productItems");
}









}
