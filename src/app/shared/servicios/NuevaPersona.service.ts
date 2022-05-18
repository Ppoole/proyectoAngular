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
export class NuevaPersonaService {

  constructor(private http: HttpClient,) { }

  //Conexion con el servidor PHP nuevaNota.
  private notasUrl = 'http://127.0.0.1/nuevaPersona.php';
  nuevaPersona(PersonaActual:Persona):Observable<any>{
    return this.http.post<any>(this.notasUrl, {
      nombre:PersonaActual.nombre,
      detalles:PersonaActual.detalles,
      nivelContento:PersonaActual.nivelContento
    })
  }

}
