import { Component, NgModule, OnInit, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Nota } from "../shared/models/nota.model";




@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent {
  @Input() notaActual:Nota;
  
  
  
  formularioNota: FormGroup;
  constructor(private fb: FormBuilder) {
    
    this.crearFormulario();
  }

  crearFormulario() {
    
    this.formularioNota = this.fb.group({

      creador: ({value:'',disabled:true}),
      fecha: ({value:'',disabled:true}),
      telefono:({value:'',disabled:true}),
      contenido: '',
      detalles: '',
      peligrosidad: '',
      impacto: ''

    });
    

  };


  ngOnInit(){
    this.retrieveData();
  }
  private retrieveData(): void {
    let res = {
      creador: this.notaActual.creador,
      fecha: this.notaActual.fecha,
      telefono:this.notaActual.tel,
      contenido: this.notaActual.contenido,
      detalles: this.notaActual.detalles,
      peligrosidad: this.notaActual.peligrosidad,
      impacto: this.notaActual.impacto
       }
       this.formularioNota.patchValue(res);
  }
  
  onSubmit() {
    this.notaActual=this.cambiarNota();
    console.log(this.notaActual);
  }

  cambiarNota():Nota{
    const modeloFormu=this.formularioNota.value;
    const notaCambiada:Nota={
      codNota: this.notaActual.codNota,
      creador: this.notaActual.creador,
      fecha: modeloFormu.fecha as Date,
      tel: this.notaActual.tel,
      contenido: modeloFormu.contenido as string,
      detalles: modeloFormu.detalles as string,
      completada: this.notaActual.completada,
      peligrosidad: modeloFormu.peligrosidad as number,
      impacto: modeloFormu.impacto as number,
      
      deserialize:this.notaActual.deserialize,
      dameDetalles:this.notaActual.dameDetalles

    };
    return notaCambiada;
  }

}
