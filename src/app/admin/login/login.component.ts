import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 loginBD:any;
 existe=true;
 login;
 motdepasse;
  constructor(private router: Router,
              private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.recupereAdmin().subscribe(
      data=>{
        this.loginBD=data;
      },
      err=>{
        console.log("probleme de reseau");
      }
    )
  }

  ConnexionLogin(credentials: any) {
    console.log(credentials.login+" "+ this.loginBD.login);
    console.log(credentials.motdepasse+" "+this.loginBD.motdepasse);
    for(let admin of this.loginBD._embedded.logins){
      if(credentials.login==admin.login && credentials.motdepasse==admin.motdepasse){
        localStorage.setItem('admin','true');
        this.router.navigateByUrl("listeProduit/admin/0");
      }
      else{
        console.log("probleme de connexion");
        this.existe=false;
        this.router.navigateByUrl("admin");
      }
    }


  }
}
