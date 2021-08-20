import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

//modulos
import { HeroesRouterModule } from './heroes-router.module';
import { MaterialModule } from '../material/material.module';


//Componentes personales
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';






@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    HomeComponent,
    ListadoComponent,
    ImagenPipe,
    ConfirmarComponent,
    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HeroesRouterModule
  ]
})
export class HeroesModule { }
