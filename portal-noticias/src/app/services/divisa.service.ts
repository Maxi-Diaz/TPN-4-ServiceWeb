import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor(private _http: HttpClient) { }

  public getConversor(desde, para, valor): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Rapidapi-Host': 'currency-exchange.p.rapidapi.com',
        'X-Rapidapi-Key': '80ba7e86e3msh696e6bf84bb395ap142a66jsn8185bd0ab47e',
      }),
      params: {
        'from': desde,
        'to': para,
        'q': valor,
      }
    };
    return this._http.get("https://currency-exchange.p.rapidapi.com/exchange", httpOptions);
  }
}
