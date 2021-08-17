import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img{
        width: 100%;
        border-radius: 5px;
      }
      
    
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe! : Heroe;
  constructor(private activaterouter : ActivatedRoute,
     private heroeservicio : HeroesService,
     private router :Router
     ) { }

  ngOnInit(): void {
    // this.activaterouter.params.subscribe(({id})=> console.log(id));

    this.activaterouter.params
    .pipe(switchMap(({id})=> this.heroeservicio.getHeroePorId(id)))
    .subscribe(data => this.heroe = data);
    
  }
  regresar(){
    this.router.navigate(['/heroes/listado']);
  }
}
