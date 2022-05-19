import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Telefono} from "../models/tel.model";
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';




@Injectable({
  providedIn: 'root'
})
export class NuevoTelService {

  constructor(private http: HttpClient,) { }

  //Conexion con el servidor PHP nuevaNota.
  private notasUrl = 'http://127.0.0.1/entradaDB.php';
  nuevoTelefono(telefonoActual:Telefono):Observable<any>{
    return this.http.post<any>(this.notasUrl, {
      tabla:'telefono',
      datos:{
        tel:telefonoActual.telefono,
        codPer:telefonoActual.codPer,
      }}
    )
  }

}
