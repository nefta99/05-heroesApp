import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor(private authservice: AuthService ){}
  canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean  {
      if(this.authservice.auth.id){
        return true;
      }
      console.log("Bloqueado por el authGuard - canActivate");
      return false;
  }

  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean > | Promise<boolean > | boolean  {
     
    if(this.authservice.auth.id){
      return true;
    }
    console.log("Bloqueado por el authGuard - canLoad");
    return false;
  }
}
