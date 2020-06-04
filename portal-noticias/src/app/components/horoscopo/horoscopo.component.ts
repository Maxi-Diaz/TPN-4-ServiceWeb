import { HoroscopoService } from './../../services/horoscopo.service';
import { Component, OnInit } from '@angular/core';
import { Horoscopo } from 'src/app/models/horoscopo';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  horoscopo: Horoscopo;
  list_horoscopo: Array<Horoscopo>;

  constructor(private horoscopoService: HoroscopoService) { 
    this.horoscopo = new Horoscopo();
    this.list_horoscopo = new Array<Horoscopo>();
    this.cargarHoroscopo();
  }

  ngOnInit(): void {
  }

  public cargarHoroscopo(){
    this.horoscopoService.lista_horoscopo().subscribe(
      (result) =>{
        this.list_horoscopo = new Array<Horoscopo>();
        result['arts'].forEach(element => {
          this.horoscopo = new Horoscopo();
          Object.assign(this.horoscopo,element);
          this.list_horoscopo.push(this.horoscopo)
          console.log(this.list_horoscopo);
        });
      },
      error => { alert("Error en la peticion"); }
    )
  }

}
