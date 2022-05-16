import { Component, NgModule, OnInit, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AppComponent } from "../app.component";
import { Nota } from "../shared/models/nota.model";
import { GuardarNotaService } from "../shared/servicios/GuardarNota.service";





@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent {
  @Input() notaActual:Nota;
  
  
  
  formularioNota: FormGroup;

  //Voy a usar FormBuilder para simplificar la creación del formulario, pero es una abstracción.
  constructor(private fb: FormBuilder, private GuardarNotaService: GuardarNotaService, private AppComponent:AppComponent) {
    
    this.crearFormulario();
  }

  //Definimos la creacion del formulario.
  crearFormulario() {
    this.formularioNota = this.fb.group({
      //Defino los campos, y aquí es donde pongo las validaciones.
      creador: ({value:'',disabled:true}),
      fecha: ({value:'',disabled:true}),
      telefono:({value:'',disabled:true}),
      contenido: ['', Validators.required ],
      detalles: ['', Validators.required ],
      peligrosidad:['', Validators.compose([Validators.min(1),Validators.max(9),Validators.required]) ],
      impacto: ['', Validators.compose([Validators.min(1),Validators.max(9),Validators.required]) ]

    });
    

  };

  //Es necesario popularlo con onInit porque si no aún no tiene notaActual cargada. Primero usa el constructor y luego hace los imports, asi que es necesario llenar 
  //el formulario en ngOnInit
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
  
  //Es al darle a guardar cambios. Si los cambios son válidos (TODO: enviarlos al servicio y a la BDD)
  onSubmit() {
    if (this.formularioNota.status=='VALID'){
    this.notaActual=this.cambiarNota();
    this.AppComponent.dameNumeros(this.notaActual.tel)
      
    this.GuardarNotaService.guardaNota(this.notaActual).subscribe(respuesta=>{
      
      return respuesta;
      
    }); 

    
    
    }
    else{
      alert("Por favor completa la nota.")
    }
  }

  //Este es el metodo de cambiar la nota. 
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
      dameDetalles:this.notaActual.dameDetalles,
      

    };
    return notaCambiada;
  }


  //Lo declaro aqui para simplificar el HTML
  get contenido() { return this.formularioNota.get('contenido'); }
  get detalles() { return this.formularioNota.get('detalles'); }
  get peligrosidad() { return this.formularioNota.get('peligrosidad'); }
  get impacto() { return this.formularioNota.get('impacto'); }

}
