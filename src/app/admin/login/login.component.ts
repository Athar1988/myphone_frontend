import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginBD="best";
  motdepasseBD="best";

  login;
  motdepasse;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ConnexionLogin(credentials: any) {
    console.log(credentials.login+" "+ this.loginBD);
    console.log(credentials.motdepasse+" "+this.motdepasseBD);
    if(credentials.login==this.loginBD  && credentials.motdepasse==this.motdepasseBD){
      localStorage.setItem('admin','true');
      this.router.navigateByUrl("");
    }
    else{
      console.log("probleme de connexion");
      this.router.navigateByUrl("admin");
    }

  }
}
