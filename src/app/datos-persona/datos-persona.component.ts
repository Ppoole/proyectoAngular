import { Component, Input, OnInit } from '@angular/core';
import { NuevaPersonaService } from '../shared/servicios/NuevaPersona.service';
import { Persona } from '../shared/models/persona.model';
import { ObtenPersonaService } from '../shared/servicios/ObtenPersona.service';


@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.component.html',
  styleUrls: ['./datos-persona.component.scss']
})
export class DatosPersonaComponent implements OnInit {
  @Input() numeroEnBusqueda:string;
  constructor(private ObtenPersonaService:ObtenPersonaService, private NuevaPersonaService:NuevaPersonaService) { }

  personaEnMemoria:Persona=undefined;//Creo la variable persona en memoria de donde beberé muchos valores para el HTML

  /**Al iniciarse, coge el número que hay introducido y lo busca en la base de datos. Si está, lo carga, y si no está, crea una persona que introduce inmediatamente en la BDD */
  ngOnInit(): void {
    
    let numeroABuscar=this.numeroEnBusqueda;
    
    this.ObtenPersonaService.obtenPersona(numeroABuscar).subscribe(datosPersona => {
      if (datosPersona!=undefined&&datosPersona.length!=0){//Por si falla o retorna un array vacio
      this.personaEnMemoria =new Persona(datosPersona[0]);
      
      }
      else{//Aquí es donde crea una persona de humor neutro si no encuentra a nadie.
        
        this.personaEnMemoria=new Persona({nombre:'',detalles:'',nivelContento:3});

        this.NuevaPersonaService.nuevaPersona(this.personaEnMemoria).subscribe(respuesta => {

          return respuesta;

        });
      }
      })
  }

  /**Genero esta función para poder actualizar los datos cada vez que se cambia el número, si no, sólo tendríamos los primeros onInit, que de hecho no es ninguno pues el onInit
   * entra antes que el numero. Esta función es llamada desde app.component.ts
   */
  actualizar(tel:string){
    let numeroABuscar=tel;
    
    this.ObtenPersonaService.obtenPersona(numeroABuscar).subscribe(datosPersona => {
      if (datosPersona!=undefined&&datosPersona.length!=0){
      let personaActual=new Persona(datosPersona[0]);
      this.personaEnMemoria=personaActual;
      }
      else{
        this.personaEnMemoria=new Persona({nombre:'',detalles:'',nivelContento:3});

        this.NuevaPersonaService.nuevaPersona(this.personaEnMemoria).subscribe(respuesta => {

          return respuesta;

        });


      }
      })
  }
  

}
