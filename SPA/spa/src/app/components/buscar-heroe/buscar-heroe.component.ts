import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:String;

  constructor( private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    })
  }

}
