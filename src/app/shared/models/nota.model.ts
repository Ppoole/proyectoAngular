import {Deserializable} from "./deserializable.model";
import {Input,Component} from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class Nota {
  
    codNota: number;
    creador: number;
    fecha:Date;
    peligrosidad: number;
    impacto: number;
    completada: number;
    tel: bigint;
    contenido: string;
    detalles: string;
    

    constructor(datos:any){
      this.codNota=datos.codNota;
      this.creador=datos.creador;
      this.fecha=datos.fecha;
      this.peligrosidad=datos.peligrosidad;
      this.impacto=datos.impacto;
      this.completada=datos.completada;
      this.tel=datos.tel;
      this.contenido=datos.contenido;
      this.detalles=datos.detalles;
      
    }


    

    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }

    dameDetalles(){
        return this.detalles;
    }

    
    dameRelevancia?(pesoPeligrosidad:number, pesoImpacto:number):number{
      return(this.peligrosidad*pesoPeligrosidad+this.impacto*pesoImpacto);
    }

    enFecha?(horasMaximas:number):any{
      var horas:number =Math.abs(new Date().getTime()-new Date(this.fecha).getTime())/1000/3600;

      if(horas>horasMaximas){
        return false;
      }
      else{
        return true;
      }

    }
    

  }