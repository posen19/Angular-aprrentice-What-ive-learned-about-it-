import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas:any[] = [];
  loading:boolean;

  constructor( private _spotify:SpotifyService ) { }

  buscar( termino : string )
  {
    this.loading = true;
    if(termino != "")
    {
      this._spotify.getArtistas( termino )
        .subscribe( data => this.artistas = data);
    }
    else
    {
      this.artistas = [];
    }
    this.loading = false;
  }
}
