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
  list_informes: Array<any>;

  constructor(private informeService: EstadisticaService) {
    this.informe = new Informe();
    this.paises = new Array<Informe>();
    this.obtenerDatosPais();
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
        this.list_informes = result;

        this.informe.pais = this.list_informes[0].country;
        this.informe.confirmados = this.list_informes[0].provinces[0].confirmed;
        this.informe.recuperados = this.list_informes[0].provinces[0].recovered;
        this.informe.fallecidos = this.list_informes[0].provinces[0].deaths;
        this.paisV = this.informe.pais;
        this.confirmadosV = this.informe.confirmados
        this.recuperadosV = this.informe.recuperados
        this.fallecidosV = this.informe.fallecidos
        this.guardarPais();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  /**
   * guardarPais
   */
  public guardarPais() {
    this.paises.push(this.informe);
    this.informe = new Informe();
  }
}
