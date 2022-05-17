import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Nota} from "./shared/models/nota.model";
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }

  //Conexion con el servidor PHP angNotas.
  private notasUrl = 'http://127.0.0.1/angNotas.php';
  dameNotas(tel:any):Observable<any>{
    

    return this.http.post<any>(this.notasUrl, {
      tel: tel
    })
  }

}
