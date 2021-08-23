import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor(private authservice: AuthService,
      private router : Router
    ){}
  canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean  {

      return this.authservice.verificaAutenticacion()
              .pipe(
                  tap(estaAutenticado => {
                    if(!estaAutenticado){
                        this.router.navigate(['./auth/login'])
                    }
              })
              );

      // if(this.authservice.auth.id){
      //   return true;
      // }
      // console.log("Bloqueado por el authGuard - canActivate");
      // return false;
  }

  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean > | boolean  {


      return this.authservice.verificaAutenticacion()
              .pipe(
                  tap(estaAutenticado => {
                    if(!estaAutenticado){
                        this.router.navigate(['./auth/login'])
                    }
              })
              );
     
    // if(this.authservice.auth.id){
    //   return true;
    // }
    // console.log("Bloqueado por el authGuard - canLoad");
    // return false;
  }
}
