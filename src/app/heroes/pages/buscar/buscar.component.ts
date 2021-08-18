import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino : string ='';
  heroes : Heroe[] =[];
  hereoseleccionado : Heroe | undefined;
  constructor(private heroesservice : HeroesService) { }

  ngOnInit(): void {
  }


  busando(){
    this.heroesservice.getSugerencias(this.termino.trim() ).subscribe(data => this.heroes = data)
  
  }
  opcionSeleccionada(evento : MatAutocompleteSelectedEvent){
    if(!evento.option.value )
    {
      //con esto limpiamos la variable que se quedo con el rasto del otro super heroe
      this.hereoseleccionado=undefined;
     // CON ESTO SI ENCONTRAMOS VACIO EL ARREGLO NO HACEMOS NADA Y NO CONTINUA EL CODIGO FUENTE
      return ;
    }
    const heroe : Heroe  = evento.option.value;
    // con esto hacemos que se llene el combito
    this.termino = heroe.superhero;

    this.heroesservice.getHeroePorId(heroe.id!)
    .subscribe(datos => this.hereoseleccionado=datos)
  }

}
