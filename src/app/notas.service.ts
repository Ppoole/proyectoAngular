import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }

  //Conexion con el servidor PHP angNotas. TODO: Orientarlo a objetos.
  private notasUrl = 'http://127.0.0.1/angNotas.php';
  dameNotas(tel:any):Observable<any>{
    return this.http.post<any>(this.notasUrl, {
      tel: tel
    })
  }

}
