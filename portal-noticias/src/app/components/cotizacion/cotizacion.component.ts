import { DivisaService } from './../../services/divisa.service';
import { Conversor } from './../../models/conversor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  desde: string;
  para: string;
  valor: number;
  valorConvertido: string;
  mostrar: boolean = false;
  conversor: Conversor;
  list_valores: Array<Conversor>;
  lista_Paises = ["ARS", "USD", "EUR"]
  moneda: number = 1;

  constructor(private divisaService: DivisaService) {
    this.conversor = new Conversor();
    this.list_valores = new Array<Conversor>();
    //this.cargarTabla();
  }

  ngOnInit(): void {
  }

  public Conversion() {
    this.divisaService.getConversor(this.desde, this.para, this.valor).subscribe(
      (result) => {
        this.valorConvertido = result['result'];
        console.log(this.valorConvertido);
        this.mostrar = true;
      },
      error => { alert("Error en la petición"); }
      )
  }

  /**
   * cargarTabla
   */
  public cargarTabla() {
    this.lista_Paises;
    for (var i = 0; i < this.lista_Paises.length; i++) {
      for (var j = 0; j < this.lista_Paises.length; j++) {
        this.divisaService.getConversor(this.lista_Paises[i], this.lista_Paises[j], this.moneda).subscribe(
          (result) => {
            this.conversor.resultado = result['result'];
            this.conversor.valor = this.moneda;
            this.list_valores.push(this.conversor);
            this.conversor = new Conversor();
            console.log(this.list_valores)
          },
          error => {alert("Error en la petición")}
        )
      }
    }
  }
}
