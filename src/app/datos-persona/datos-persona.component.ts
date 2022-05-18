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
  personaEnMemoria:Persona=undefined;
  ngOnInit(): void {
    
    let numeroABuscar=this.numeroEnBusqueda;
    
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
