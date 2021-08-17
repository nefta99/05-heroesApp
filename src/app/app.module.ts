import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

//Moduloas creados 
import { AppRoutingModule } from './app-routing.module';

//Componente creados
import { ErrorPageComponent } from './shared/error-page/error-page.component';





//Comentario
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
