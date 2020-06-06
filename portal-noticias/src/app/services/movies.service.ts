import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient) { }

  public getPeliculas(pelicula: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Rapidapi-Host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
        'X-Rapidapi-Key': '80ba7e86e3msh696e6bf84bb395ap142a66jsn8185bd0ab47e',
        
      }),
    };
    return this._http.get("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"+pelicula, httpOptions);
  }
}
