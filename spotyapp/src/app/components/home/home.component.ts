import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones:any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private _spotify:SpotifyService ) {
    this.loading = true;
    this.error = false;
    _spotify.getNewReleases()
      .subscribe( (data) =>  {
        this.loading = false;
        this.nuevasCanciones = data
      },
      ( errorService )=> {
          this.loading = false;
          this.error = true;
          this.mensajeError = errorService.error.error.message;
      });
  }

}
