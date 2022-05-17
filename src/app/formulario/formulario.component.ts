import { Component, NgModule, OnInit, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AppComponent } from "../app.component";
import { Nota } from "../shared/models/nota.model";
import { GuardarNotaService } from "../shared/servicios/GuardarNota.service";
import { NuevaNotaService } from "../shared/servicios/NuevaNota.service";





@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent {
  @Input() notaActual: Nota;
  @Input() soloTelefono: bigint;


  
  formularioNota: FormGroup;

  //Voy a usar FormBuilder para simplificar la creación del formulario, pero es una abstracción.
  constructor(private fb: FormBuilder, private GuardarNotaService: GuardarNotaService, private NuevaNotaService: NuevaNotaService) {

    this.crearFormulario();
  }

  //Definimos la creacion del formulario.
  crearFormulario() {
    this.formularioNota = this.fb.group({
      //Defino los campos, y aquí es donde pongo las validaciones.
      creador: ({ value: '', disabled: true }),
      fecha: ({ value: '', disabled: true }),
      telefono: ({ value: '', disabled: true }),
      contenido: ['', Validators.required],
      detalles: ['', Validators.required],
      peligrosidad: ['', Validators.compose([Validators.min(1), Validators.max(9), Validators.required])],
      impacto: ['', Validators.compose([Validators.min(1), Validators.max(9), Validators.required])]

    });


  };

  /**Es necesario popularlo con onInit porque si no aún no tiene notaActual cargada. Primero usa el constructor y luego hace los imports, asi que es necesario llenar 
  el formulario en ngOnInit. Además, voy a comprobar si se ha pasado un SoloNumero (que significa que accedemos al componente por "nueva nota", o si esta en undefined
  (lo que significa que hemos entrado por "editar".*/
  ngOnInit() {
    
    //Decidí dividirlo en dos funciones distintas por haber mucha diferencia de variable.
    if (this.soloTelefono == undefined) {
      this.retrieveData();
    }
    else {
      this.createData();

    }
  }
  private retrieveData(): void {
    let res = {
      creador: this.notaActual.creador,
      fecha: this.notaActual.fecha,
      telefono: this.notaActual.tel,
      contenido: this.notaActual.contenido,
      detalles: this.notaActual.detalles,
      peligrosidad: this.notaActual.peligrosidad,
      impacto: this.notaActual.impacto
    }
    this.formularioNota.patchValue(res);
  }

  private createData(): void {
    let res = {
      creador: 1,
      fecha: new Date(),
      telefono: this.soloTelefono,
      contenido: '',
      detalles: '',
      peligrosidad: '',
      impacto: ''
    }
    this.formularioNota.patchValue(res);
  }

  //Es al darle a guardar cambios. Si los cambios son válidos (TODO: enviarlos al servicio y a la BDD)
  onSubmit() {
    
    if (this.formularioNota.status == 'VALID') {

      this.notaActual = this.cambiarNota();

      if (this.soloTelefono == undefined) { //Si se ha llegado aqui por "editar nota", el telefono se pasa como atributo de Nota, no como variable SoloTelefono, asi que usamos el servicio GuardaNota.
        
        this.GuardarNotaService.guardaNota(this.notaActual).subscribe(respuesta => {

          return respuesta;

        })
      }
      else{ //Si soloTelefono está definido es que se quiere crear una nota nueva.
        this.NuevaNotaService.nuevaNota(this.notaActual).subscribe(respuesta => {

          return respuesta;

        })
      }



    }
    else {
      alert("Por favor completa la nota.")//Todo: poner algo mas bonito que un alert.
    }
  }

  //Este es el metodo de cambiar la nota. 
  cambiarNota(): Nota {
    const modeloFormu = this.formularioNota.value;

    if(this.soloTelefono!=undefined){ //De nuevo tengo que diferenciar si estoy creando una nota nueva o editando una nota antigua. TODO: Creador como variable, no como 1.
      const notaCambiada: Nota = {
      
        codNota:0,
        creador: 1,
        fecha: modeloFormu.fecha as Date,
        tel: this.soloTelefono,
        contenido: modeloFormu.contenido as string,
        detalles: modeloFormu.detalles as string,
        completada: 0,
        peligrosidad: modeloFormu.peligrosidad as number,
        impacto: modeloFormu.impacto as number,
  
  
        deserialize: this.notaActual?.deserialize,
        dameDetalles: this.notaActual?.dameDetalles,
  
  
      };
      return notaCambiada;

    }
    else{
    const notaCambiada: Nota = {
      
      codNota:this.notaActual.codNota,
      creador: this.notaActual.creador,
      fecha: modeloFormu.fecha as Date,
      tel: this.notaActual.tel,
      contenido: modeloFormu.contenido as string,
      detalles: modeloFormu.detalles as string,
      completada: this.notaActual.completada,
      peligrosidad: modeloFormu.peligrosidad as number,
      impacto: modeloFormu.impacto as number,


      deserialize: this.notaActual.deserialize,
      dameDetalles: this.notaActual.dameDetalles,


    };
    return notaCambiada;
  }
  }


  //Lo declaro aqui para simplificar el HTML
  get contenido() { return this.formularioNota.get('contenido'); }
  get detalles() { return this.formularioNota.get('detalles'); }
  get peligrosidad() { return this.formularioNota.get('peligrosidad'); }
  get impacto() { return this.formularioNota.get('impacto'); }

}
