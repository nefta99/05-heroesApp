import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes personales
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
