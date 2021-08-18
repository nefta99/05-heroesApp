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
  hereoseleccionado! : Heroe;
  constructor(private heroesservice : HeroesService) { }

  ngOnInit(): void {
  }


  busando(){
    this.heroesservice.getSugerencias(this.termino ).subscribe(data => this.heroes = data)

  }
  opcionSeleccionada(evento : MatAutocompleteSelectedEvent){
    const heroe : Heroe  = evento.option.value;
    // con esto hacemos que se llene el combito
    this.termino = heroe.superhero;

    this.heroesservice.getHeroePorId(heroe.id!)
    .subscribe(datos => this.hereoseleccionado=datos)
  }

}
