import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
//modulos
import { AuthRoutingModule } from './auth-routing.module';


//Componentes personales
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';




@NgModule({
  declarations: [
    LoginComponent,
    
    RegistroComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    //Este siempre tiene que estar aqui  para que funcionen las rutas
    AuthRoutingModule
    
  ]
})
export class AuthModule { }
