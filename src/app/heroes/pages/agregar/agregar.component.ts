import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [

    `
      img{
        width : 100%;
        border-radius : 5px;
      }

    `
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
  constructor(private heroeservicio : HeroesService,
    private activateroute : ActivatedRoute ,
    private router : Router
    ) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      //si no incluye editar que no haga nada mas
        return ;
    }

    this.activateroute.params
    .pipe(switchMap(({id})=>this.heroeservicio.getHeroePorId(id)))
    .subscribe(data => this.heroe = data);
  }


  guardar(){
    if(this.heroe.superhero.trim().length===0){
      return ;
    }

    if(this.heroe.id){
      //Actualizar
      console.log("Actualizar")
      console.log(this.heroe)
      this.heroeservicio.actualizarHeroe(this.heroe).subscribe(repuesta => console.log('Respuesta',repuesta))

    }else{
      //Agregar
      console.log("Agregar")
      console.log(this.heroe)
      this.heroeservicio.agregarHeroe(this.heroe)
        .subscribe(datoHeroe => {
          this.router.navigate(['/heroes/editar',datoHeroe.id])
        })
    }

    // this.heroeservicio.agregarHeroe(this.heroe)
    // .subscribe(respuesta => {
    //   console.log(respuesta);
    // })
  }

}
