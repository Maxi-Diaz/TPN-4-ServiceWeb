import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http: HttpClient) { }

  /**
   * obtienen el lista_horoscopo del Api Rest
   */
  public lista_horoscopo(signo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "X-Rapidapi-Host": "horoscope5.p.rapidapi.com",
        "X-Rapidapi-Key": "80ba7e86e3msh696e6bf84bb395ap142a66jsn8185bd0ab47e",
      }),
      params:{
        'sign': signo,
      }
    };
    return this._http.get("https://horoscope5.p.rapidapi.com/general/daily",httpOptions);
  }
}
