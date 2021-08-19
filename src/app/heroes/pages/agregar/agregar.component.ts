import { Component, OnInit } from '@angular/core';


import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id : 'DC Comics',
      desc :'DC - Comics'
    },
    {
      id : 'DC Comics',
      desc :'Marvel - Comics'
    }
  ];

  heroe : Heroe={
    superhero : '',
    alter_ego: '',
    characters : '',
    first_appearance:'',
    publisher : Publisher.DCComics,
    alt_img:'',

    
  }
  constructor(private heroeservicio : HeroesService) { }

  ngOnInit(): void {
  }


  guardar(){
    if(this.heroe.superhero.trim().length===0){
      return ;
    }
    this.heroeservicio.agregarHeroe(this.heroe)
    .subscribe(respuesta => {
      console.log(respuesta);
    })
  }

}
