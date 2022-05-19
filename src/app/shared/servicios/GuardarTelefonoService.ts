import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Telefono} from "../models/tel.model";

import { AppComponent } from 'src/app/app.component';




@Injectable({
  providedIn: 'root'
})
export class GuardarTelefonoService {

  constructor(private http: HttpClient,) { }

  //Conexion con el servidor PHP guardaNota.
  private notasUrl = 'http://127.0.0.1/actualizaDB.php';
  guardaTelefono(telefonoActual:Telefono):Observable<any>{
    return this.http.post<any>(this.notasUrl, {
      tabla:'telefono',
      nomId:'tel',
      id:telefonoActual.telefono,
      datos:{codPer:telefonoActual.codPer}
    })
  }

  

}