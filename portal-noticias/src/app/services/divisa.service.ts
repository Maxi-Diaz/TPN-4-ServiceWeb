import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor(private _http: HttpClient) { }

  public getConversor(desde, a, valor): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Rapidapi-Host': 'community-neutrino-currency-conversion.p.rapidapi.com',
        'X-Rapidapi-Key': '80ba7e86e3msh696e6bf84bb395ap142a66jsn8185bd0ab47e',
      }),
      body: {
        'from-type': desde,
        'to-type': a,
        'from-valor': valor,
      }
    };
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", {'from-type': desde, 'to-type': a, 'from-value': valor}, httpOptions);
  }
}
