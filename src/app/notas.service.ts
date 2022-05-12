import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Nota} from "./shared/models/nota.model";
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }

  //Conexion con el servidor PHP angNotas. TODO: Orientarlo a objetos.
  private notasUrl = 'http://127.0.0.1/angNotas.php';
  dameNotas(tel:any):Observable<Nota>{
    return this.http.post<Nota>(this.notasUrl, {
      tel: tel
    })
  }

}
