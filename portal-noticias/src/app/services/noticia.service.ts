import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http: HttpClient) { }

  /**
   * listNoticias
   */
  public listNoticias(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "X-Rapidapi-Host": "livescore6.p.rapidapi.com",
        "X-Rapidapi-Key": "80ba7e86e3msh696e6bf84bb395ap142a66jsn8185bd0ab47e",
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?=category=soccer",httpOptions);
  }
}
