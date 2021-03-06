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
  private notasUrl = 'http://127.0.0.1/entradaDB.php';
  private contador= 'http://127.0.0.1/contador.php'

  nuevaPersona(PersonaActual:Persona):Observable<any>{
    return this.http.post<any>(this.notasUrl, {
      tabla:'persona',
      datos:{
      nombre:PersonaActual.nombre,
      detalles:PersonaActual.detalles,
      nivelContento:PersonaActual.nivelContento
      }
    })
  }

  cuentaPersonas():Observable<number>{
    return this.http.post<any>(this.contador,'');
  }

}
