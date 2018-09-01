import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string )
  {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers:HttpHeaders = new HttpHeaders({
      'Authorization':'Bearer QBip5tJRPv5lrU5IWzWIYi0E_b1pYYkTW7bJperd9nSbwi8HYlfN7RjsYfTks9uT3qY_tDLo8GLmuQ5VpI'
    });

    return this.http.get( url, { headers });
  }

  getNewReleases()
  {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items ) );
  }

  getArtistas( termino:string )
  {
    return this.getQuery(`search?query=${termino}&type=artist&limit=8`)
              .pipe( map( data => data['artists'].items ) );
  }

  getArtista( id:string )
  {
    return this.getQuery(`artists/${ id }`);
              // .pipe( map( data => data['artists'].items ) );
  }

  getTopTracks( id:string )
  {
    return this.getQuery(`artists/${ id }/top-tracks?country=ES`)
                  .pipe( map( data => data['tracks'] ) );
  }
}
