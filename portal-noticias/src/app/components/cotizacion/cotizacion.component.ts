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

  constructor(private divisaService: DivisaService) {
    this.conversor = new Conversor();
    this.list_valores = new Array<Conversor>();
  }

  ngOnInit(): void {
  }

  public Convercion(){
    this.divisaService.getConversor(this.desde,this.para,this.valor).subscribe( 
      (result) => {         
        this.valorConvertido=result['result'];
        console.log(this.valorConvertido);
        this.mostrar = true;
       }, 
       error => { alert("Error en la petición"); } )
  }
}
