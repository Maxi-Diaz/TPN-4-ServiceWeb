import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  constructor(private _http: HttpClient) { }

  public getPais(pais, fecha): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Rapidapi-Host': 'covid-19-data.p.rapidapi.com',
        'X-Rapidapi-Key': '80ba7e86e3msh696e6bf84bb395ap142a66jsn8185bd0ab47e',
        
      }),
      params: {
        'date': fecha,
        'name': pais
      }
    };
    return this._http.get("https://covid-19-data.p.rapidapi.com/report/country/name", httpOptions);
  }

}
