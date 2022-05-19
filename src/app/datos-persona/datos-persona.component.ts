import { Component, Input, OnInit } from '@angular/core';
import { NuevaPersonaService } from '../shared/servicios/NuevaPersona.service';
import { Persona } from '../shared/models/persona.model';
import { Telefono } from '../shared/models/tel.model';
import { ObtenPersonaService } from '../shared/servicios/ObtenPersona.service';
import { NuevoTelService } from '../shared/servicios/NuevoTel.service';
import { GuardarPersonaService } from '../shared/servicios/GuardarPersona.service';
import { ComprobarNombreService } from '../shared/servicios/ComprobarNombre.service';
import { GuardarTelefonoService } from '../shared/servicios/GuardarTelefonoService';


@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.component.html',
  styleUrls: ['./datos-persona.component.scss']
})
export class DatosPersonaComponent implements OnInit {
  @Input() numeroEnBusqueda: string;
  constructor(
    private ObtenPersonaService: ObtenPersonaService, 
    private NuevaPersonaService: NuevaPersonaService, 
    private NuevoTelService: NuevoTelService, 
    private GuardarPersonaService:GuardarPersonaService,
    private ComprobarNombreService:ComprobarNombreService,
    private GuardarTelefonoService:GuardarTelefonoService
  ) { }

  personaEnMemoria:Persona = undefined;//Creo la variable persona en memoria de donde beberé muchos valores para el HTML

  /**Al iniciarse, coge el número que hay introducido y lo busca en la base de datos. Si está, lo carga, y si no está, crea una persona que introduce inmediatamente en la BDD */
  ngOnInit(): void {
    this.actualizar(this.numeroEnBusqueda);
  }

  /**Genero esta función para poder actualizar los datos cada vez que se cambia el número, si no, sólo tendríamos los primeros onInit, que de hecho no es ninguno pues el onInit
   * entra antes que el numero. Esta función es llamada desde app.component.ts
   */
  actualizar(tel: string) {
    let numeroABuscar = tel;
    this.personaEnMemoria=undefined;
    this.ObtenPersonaService.obtenPersona(numeroABuscar).subscribe(datosPersona => {
      if (datosPersona != undefined && datosPersona.length != 0) {
        let personaActual = new Persona(datosPersona[0]);
        this.personaEnMemoria = personaActual;
      }
      else {
        this.personaEnMemoria = new Persona({ nombre: '', detalles: '', nivelContento: 3 });
        this.NuevaPersonaService.nuevaPersona(this.personaEnMemoria).subscribe(respuesta => {
          

          this.NuevaPersonaService.cuentaPersonas().subscribe(respuesta => {
            this.personaEnMemoria.codPer=respuesta;
            let nuevoTel = new Telefono({ telefono: numeroABuscar, codPer:this.personaEnMemoria.codPer});
            
            //console.log(this.personaEnMemoria)
            this.NuevoTelService.nuevoTelefono(nuevoTel).subscribe(respuesta => {
              return respuesta;
            });
        });
        
        });
      }
    })
  }

  guardaPersona(nombre:string,detalles:string){
    if(nombre!=''){
      this.ComprobarNombreService.compruebaNombre(nombre).subscribe(respuesta => {
        if (respuesta && nombre!=this.personaEnMemoria.nombre){
          if(confirm("Esta persona ya existe. Añadir el número a su archivo? ")) {
            let nuevoTel = new Telefono({ telefono: this.numeroEnBusqueda, codPer:respuesta});
            this.GuardarTelefonoService.guardaTelefono(nuevoTel).subscribe();
            
          }
        }
        else{
          this.personaEnMemoria.nombre=nombre;
          this.personaEnMemoria.detalles=detalles;
          this.GuardarPersonaService.guardaPersona(this.personaEnMemoria).subscribe();
        }
      });
      

    }
    
  }


}
