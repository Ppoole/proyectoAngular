import {Deserializable} from "./deserializable.model";

export class Nota implements Deserializable {
    codNota: number;
    creador: number;
    fecha:Date;
    peligrosidad: number;
    impacto: number;
    completada: number;
    tel: bigint;
    contenido: string;
    detalles: string;

    
    

    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }

    dameDetalles(){
        return this.detalles;
    }

  }