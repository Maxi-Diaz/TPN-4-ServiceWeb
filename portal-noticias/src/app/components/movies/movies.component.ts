import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  mostrar:boolean=false;
  imagen: boolean=true;
  peli0=0
  peli1=1
  peli2=2
  movie: Movie;
  pelicula: string
  peliculas: Array<Movie>;
  list_peliculas: Array<any>;
  peli01=['hulk', 'Avenger', 'Thor']  
  
  constructor(private peliculaService: MoviesService) {
    this.movie = new Movie()
    this.peliculas = new Array<Movie>();
    this.cargarTabla();
   }

  ngOnInit(): void {
  }

  /**
   * obtenerPelicual
   */
  public obtenerPelicula() {
    this.peliculaService.getPeliculas(this.pelicula).subscribe(
      (result) => {
        this.movie.title = result['title'];
        this.movie.year = result['year'];
        this.movie.length = result['length'];
        this.movie.poster = result['poster']
        this.movie.rating = result['rating'];
        this.movie.plot = result['plot'];
        this.mostrar=true;
        this.imagen=false;
      },
      (error) => {
        console.log(alert("Error en la petición"))
      }
    )
  }

  public cargarTabla(){
    this.peli01;
    for (var i = 0; i < this.peli01.length; i++){
      this.peliculaService.getPeliculas(this.peli01[i]).subscribe(
        (result) => {
          this.movie.title = result['title'];
          this.movie.year = result['year'];
          this.movie.length = result['length'];
          this.movie.poster = result['poster']
          this.movie.rating = result['rating'];
          this.movie.plot = result['plot'];
          this.peliculas.push(this.movie);
          this.movie = new Movie()
        },
        (error) => {
          console.log(alert("Error en la petición"))
        }
      )
    }
  }



}
