import { NoticiaService } from './../../services/noticia.service';
import { Noticias } from './../../models/noticias';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticia: Noticias
  list_noticias: Array<Noticias>;

  constructor(private noticiaService: NoticiaService) { 
    this.noticia= new Noticias();
    this.list_noticias = new Array<Noticias>();
    this.cargarNoticias();
   }

  ngOnInit(): void {
  }

  public cargarNoticias(){
    this.noticiaService.listNoticias().subscribe(
      (result) =>{
        this.list_noticias = new Array<Noticias>();
        result['arts'].forEach(element => {
          this.noticia = new Noticias();
          Object.assign(this.noticia,element);
          this.list_noticias.push(this.noticia)
        });
      },
      error => { alert("Error en la peticion"); }
    )
  }

}
