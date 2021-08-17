import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
 
  ]
})
export class ListadoComponent implements OnInit {

  heroes : Heroe []=[];

  constructor(private heroesservices : HeroesService) { }

  ngOnInit(): void {
    this.heroesservices.getHeroes()
    .subscribe(heroes =>
      {
        this.heroes = heroes;
        
      });
  }

}
