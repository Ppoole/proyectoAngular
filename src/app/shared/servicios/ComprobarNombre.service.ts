import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Persona} from "../models/persona.model";

@Injectable({
    providedIn: 'root'
  })
  export class ComprobarNombreService {
  
    constructor(private http: HttpClient,) { }
  
    //Conexion con el servidor PHP nuevaNota.
    private notasUrl = 'http://127.0.0.1/comprobarNombre.php';
    compruebaNombre(nombre:string):Observable<string[]>{
      return this.http.post<any>(this.notasUrl, {
        nombre:nombre,
      })
    }
  
  }