import { HoroscopoService } from './../../services/horoscopo.service';
import { Component, OnInit } from '@angular/core';
import { Horoscopo } from 'src/app/models/horoscopo';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  signo: string;
  horoscopo: Horoscopo;
  list_horoscopo: Array<Horoscopo>;
  horoscopos: Array<any>;

  constructor(private horoscopoService: HoroscopoService) { 
    this.horoscopo = new Horoscopo();
    this.list_horoscopo = new Array<Horoscopo>();
    this.cargarHoroscopo();
  }

  ngOnInit(): void {
  }

  public cargarHoroscopo(){
    let signo = "taurus"
    this.horoscopoService.lista_horoscopo(signo).subscribe(
      (result) =>{
        this.horoscopos = result;
        this.horoscopo.nombre = this.horoscopos[0]?.sign[0]?.name;
        this.horoscopo.fecha = this.horoscopos[0]?.sign[0]?.birthday;
        this.horoscopo.descripcion = this.horoscopos[0]?.result[0]?.description;
        this.list_horoscopo.push(this.horoscopo)
        console.log(this.list_horoscopo);
      },
      error => { alert("Error en la peticion"); }
    )
  }

}
