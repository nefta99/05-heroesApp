import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { map, tap } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = environment.baseUrl;
  private _auth : Auth | undefined;

  get auth() : Auth{
    //Con esto {...objeto} hacemos que el objeto no pase por referencia es decir
    //que no se pueda modificar el contenido del objeto por ningun lado para que no cambien los valores

    return {...this._auth!}
  }

  constructor(private http : HttpClient) { }

  //Esto esta dentro del services
  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      //Esto se ejecuta primero que el subcribe que cosume el servicio
      tap(resp => this._auth = resp),
      tap(xx => localStorage.setItem('token',xx.id))
    )
  }

  logout(){

    
    this._auth = undefined;
  }

  verificaAutenticacion() : Observable<boolean>  {
    if(!localStorage.getItem('token'))
    {
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(
              map(auth => {
                console.log('map',auth);
                this._auth = auth;
                return true;
              })
            );
  }

}
