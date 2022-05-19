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
   * Además, si se da el caso de un numero que no está en la BDD, esta función guardará en la misma una nueva persona y un nuevo numero.
   */
  actualizar(tel: string) {
    let numeroABuscar = tel;
    this.personaEnMemoria=undefined; //limpiamos, por si acaso
    this.ObtenPersonaService.obtenPersona(numeroABuscar).subscribe(datosPersona => {//A buscar una persona cuyos datos coincidan con el numero
      if (datosPersona != undefined && datosPersona.length != 0) {//Si hay una
        let personaActual = new Persona(datosPersona[0]); //La guardamos como persona actual
        this.personaEnMemoria = personaActual;
      }
      else {
        this.personaEnMemoria = new Persona({ nombre: '', detalles: '', nivelContento: 3 }); //Pero si no, creamos persona nueva, de humor neutral
        this.NuevaPersonaService.nuevaPersona(this.personaEnMemoria).subscribe(respuesta => {
          

          this.NuevaPersonaService.cuentaPersonas().subscribe(respuesta => {
            this.personaEnMemoria.codPer=respuesta;
            let nuevoTel = new Telefono({ telefono: numeroABuscar, codPer:this.personaEnMemoria.codPer});
            
            
            this.NuevoTelService.nuevoTelefono(nuevoTel).subscribe(respuesta => {
              return respuesta;
            });
        });
        
        });
      }
    })
  }

  /** Esta función guarda los datos de una persona. En caso de que se comparta nombre con una persona anterior, pregunta si quiere asignar el telefono nuevo a la persona antigua
   * TODO: Ver que pasa si se cambian detalles/cara a la hora de reasignar tel.
  */
  guardaPersona(nombre:string,detalles:string){
    if(nombre!=''){//Si el nombre no esta vacio
      this.ComprobarNombreService.compruebaNombre(nombre).subscribe(respuesta => { //Esto ataca la BDD y pregunta "Oye, algun tel tiene este nombre?"
        if (respuesta && nombre!=this.personaEnMemoria.nombre){ //Si si, y no es que esté guardando algo dos veces, y no es el mismo numero, pregunta
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
