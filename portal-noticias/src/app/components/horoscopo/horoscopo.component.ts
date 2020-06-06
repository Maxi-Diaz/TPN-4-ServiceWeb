import { HoroscopoService } from './../../services/horoscopo.service';
import { Component, OnInit } from '@angular/core';
import { Horoscopo } from 'src/app/models/horoscopo';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  valor0= 0;
  valor1= 1;
  valor2= 2;
  valor3= 3;
  valor4= 4;
  valor5= 5;
  valor6= 6;
  valor7= 7;
  valor8= 8;
  valor9= 9;
  valor10= 10;
  valor11= 11;
  signo: number;
  horoscopo: Horoscopo;
  horoscopos: Array<Horoscopo>;

  constructor(private horoscopoService: HoroscopoService) { 
    this.horoscopo = new Horoscopo();
    this.horoscopos = new Array<Horoscopo>();
    this.cargarHoroscopo();
  }

  ngOnInit(): void {
  }

  cargarHoroscopo(){
    this.horoscopoService.lista_horoscopo().subscribe(
      (result) => {
        this.horoscopos = new Array<Horoscopo>();
        result.forEach(element => {
          this.horoscopo = new Horoscopo();
          Object.assign(this.horoscopo, element);
          this.horoscopos.push(this.horoscopo);
        });
        console.log(this.horoscopos);
        },
      (error) => {
        alert("Error en la Peticion");
      }
    )
  }

}
