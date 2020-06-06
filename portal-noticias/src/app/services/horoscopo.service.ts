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
  public lista_horoscopo(): Observable<any> {
    const HttpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'zodiac-sign.p.rapidapi.com',
        'x-rapidapi-key': '80ba7e86e3msh696e6bf84bb395ap142a66jsn8185bd0ab47e'
      })
    };
    return this._http.get("https://zodiac-sign.p.rapidapi.com/signs", HttpOptions);
  }
}
