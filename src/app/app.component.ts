import { Component } from '@angular/core';
import {ClientService} from './services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce-telephone-frontend';
  admin;
  constructor() { }

  ngOnInit(): void {
    this.admin=localStorage.getItem('admin');
  }
}
