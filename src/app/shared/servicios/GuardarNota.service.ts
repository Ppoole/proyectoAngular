import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Nota} from "../models/nota.model";
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';




@Injectable({
  providedIn: 'root'
})
export class GuardarNotaService {

  constructor(private http: HttpClient,) { }

  //Conexion con el servidor PHP guardaNota.
  private notasUrl = 'http://127.0.0.1/guardaNota.php';
  guardaNota(notaActual:Nota):Observable<any>{
    return this.http.post<any>(this.notasUrl, {
      tel:notaActual.tel,
      completada:notaActual.completada,
      codNota:notaActual.codNota,
      contenido:notaActual.contenido,
      detalles:notaActual.detalles,
      peligrosidad:notaActual.peligrosidad,
      impacto:notaActual.impacto
    })
  }

}
