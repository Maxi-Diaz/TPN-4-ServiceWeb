import { Informe } from './../../models/informe';
import { EstadisticaService } from './../../services/estadistica.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  pais_seleccionado: string;
  mostrar: boolean = false;
  mostrar1: boolean = false;
  mostrar2: boolean = false;
  paisV: string;
  recuperadosV: number;
  confirmadosV: number;
  fallecidosV: number;
  informe: Informe;
  paises: Array<Informe>;
  list_paises: Array<any>;
  list_informe = ["Argentina" , "Chile", "Francia", "Uruguay"];

  constructor(private informeService: EstadisticaService) {
    this.informe = new Informe();
    this.paises = new Array<Informe>();
    setTimeout(() => {
      this.tabla_datos();
    }, 2000);
    
  }

  ngOnInit(): void {
  }

  public checked(e) {
    if (e.target.checked == true) {
      this.mostrar = true;
    } else {
      this.mostrar = false;
    }
  }

  public checked1(e) {
    if (e.target.checked == true) {
      this.mostrar1 = true;
    } else {
      this.mostrar1 = false;
    }
  }

  public checked2(e) {
    if (e.target.checked == true) {
      this.mostrar2 = true;
    } else {
      this.mostrar2 = false;
    }
  }

  /** 
  ** Obtiene el pais atra vez de un parametro seleccionado de un comboBox
  **/
  public obtenerDatosPais() {
    let fecha = "2020-05-28";
    this.informeService.getPais(this.pais_seleccionado, fecha).subscribe(
      (result) => {
        this.list_paises = result;
        this.paisV = this.list_paises[0]?.country
        this.confirmadosV = this.list_paises[0]?.provinces[0]?.confirmed;
        this.recuperadosV = this.list_paises[0]?.provinces[0]?.recovered;
        this.fallecidosV = this.list_paises[0]?.provinces[0]?.deaths;
      },
      (error) => {
        console.log(alert("Error en la petición"));
      }
    )
  }

  public tabla_datos() {
    let fecha = "2020-05-28";
    for (var i = 0; i < this.list_informe.length; i++) {
      this.informeService.getPais(this.list_informe[i], fecha).subscribe(
        (result) => {
          this.list_paises = result;
          this.informe.pais = this.list_paises[0]?.country
          this.informe.confirmados = this.list_paises[0]?.provinces[0]?.confirmed;
          this.informe.recuperados = this.list_paises[0]?.provinces[0]?.recovered;
          this.informe.fallecidos = this.list_paises[0]?.provinces[0]?.deaths;
          this.paises.push(this.informe);

          this.informe = new Informe();
        },
        (error) => {
          console.log(alert("Error en la petición"));
        }
      )
    }
  }
}
/**
    this.cargarTabla();
    let fecha = "2020-05-28";
    for(var i=0;i<this.paises.length; i++){
      this.informeService.getPais(this.paises.pais[i], fecha).subscribe(
        (result) => {
          this.list_paises = result;
          this.informe.pais = this.list_paises[0]?.country
          this.informe.confirmados = this.list_paises[0]?.provinces[0]?.confirmed;
          this.informe.recuperados = this.list_paises[0]?.provinces[0]?.recovered;
          this.informe.fallecidos = this.list_paises[0]?.provinces[0]?.deaths;
          console.log( this.informe.pais, this.informe.confirmados, this.informe.recuperados, this.informe.fallecidos)
        },
        (error) => {
          console.log(error);
        }
      )
    }
 **/