import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  constructor(private heroesservices : HeroesService) { }

  ngOnInit(): void {
    this.heroesservices.getHeroes()
    .subscribe(resp => console.log(resp));
  }

}
