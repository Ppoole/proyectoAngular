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
export class NuevaNotaService {

  constructor(private http: HttpClient,) { }

  //Conexion con el servidor PHP nuevaNota.
  private notasUrl = 'http://127.0.0.1/nuevaNota.php';
  nuevaNota(notaActual:Nota):Observable<any>{
    return this.http.post<any>(this.notasUrl, {
      tabla:'nota',
      valores:{creador:notaActual.creador,fecha:notaActual.fecha,peligrosidad:notaActual.peligrosidad, impacto:notaActual.impacto, completada:notaActual.completada, tel:notaActual.tel.toString(), contenido:notaActual.contenido, detalles:notaActual.detalles}
    })
  }

}
