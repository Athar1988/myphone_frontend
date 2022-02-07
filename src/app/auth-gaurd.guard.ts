import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {ClientService} from './services/client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {
  constructor(private clientService: ClientService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.clientService.AdminAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }



}
