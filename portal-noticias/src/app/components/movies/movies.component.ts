import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie;
  pelicula: string
  peliculas: Array<Movie>;
  list_peliculas: Array<any>;
  peli01={
    'title': '',
    'year': '',
    'length':'' ,
    'rating': '',
    'poster':'' ,
    'plot': '',
    'trailer': ''

  }
  constructor(private peliculaService: MoviesService) {
    this.movie = new Movie()
    this.peliculas = new Array<Movie>();
   }

  ngOnInit(): void {
  }

  /**
   * obtenerPelicual
   */
  public obtenerPelicula() {
    this.peliculaService.getPeliculas(this.pelicula).subscribe(
      (result) => {
        this.peliculas = result;
        this.movie.title = this.list_peliculas[0]?.title;
        this.movie.year = this.list_peliculas[0]?.['year'];
        this.movie.length = this.list_peliculas[0]?.length;
        this.movie.poster = this.list_peliculas[0]
        this.movie.rating = this.list_peliculas[0]?.rating;
        this.movie.plot = this.list_peliculas[0]?.plot;
        console.log(this.movie.title)
      },
      (error) => {
        console.log(alert("Error en la petición"))
      }
    )
  }

}
