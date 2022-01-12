import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  username;
  email;
  password;
  password2;

  constructor() { }

  ngOnInit(): void {
  }

}
