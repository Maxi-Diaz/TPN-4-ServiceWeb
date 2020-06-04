import { Conversor } from './../../models/conversor';
import { DivisaService } from './../../services/divisa.service';
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
  conversor: Conversor;
  list_valores: Array<Conversor>;
  valorConvertido: number;
  listado: Array<any>;

  constructor(private divisaService: DivisaService) {
    this.conversor = new Conversor();
    this.list_valores = new Array<Conversor>();
  }

  ngOnInit(): void {
  }

  /**
   * conversor de monedas
   */
  public convertir() {
    this.conversor.desde = this.desde;
    this.conversor.para = this.para;
    this.conversor.valor = this.valor;
    this.divisaService.getConversor(this.conversor.desde, this.conversor.para, this.conversor.valor).subscribe(
      (result) => {
        this.conversor.total = result;
        console.log(this.conversor.desde, this.conversor.para, this.conversor.valor, this.conversor.total);

      }
    )
  }

}
