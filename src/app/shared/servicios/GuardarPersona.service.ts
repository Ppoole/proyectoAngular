import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Persona} from "../models/persona.model";
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';




@Injectable({
  providedIn: 'root'
})
export class GuardarPersonaService {

  constructor(private http: HttpClient,) { }

  //Conexion con el servidor PHP guardaNota.
  private notasUrl = 'http://127.0.0.1/actualizaDB.php';
  guardaPersona(personaActual:Persona):Observable<any>{
    return this.http.post<any>(this.notasUrl, {
      tabla:'persona',
      nomId:'codPer',
      id:personaActual.codPer,
      datos:{nombre:personaActual.nombre, detalles:personaActual.detalles, nivelContento:personaActual.nivelContento}
    })
  }

  

}
