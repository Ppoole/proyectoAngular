import { Component, Input, Output, EventEmitter, ChangeDetectorRef ,ViewChild } from '@angular/core';
import { NotasService } from './notas.service';
import { Nota } from "./shared/models/nota.model";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbdModalComponentModule } from './modalComponent/modal-component.module';
import { Subscription, timer } from 'rxjs';
import { GuardarNotaService } from './shared/servicios/GuardarNota.service';
import { ObtenPersonaService } from './shared/servicios/ObtenPersona.service';
import { Persona } from './shared/models/persona.model';
import { DatosPersonaComponent } from './datos-persona/datos-persona.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  //Creo un timer para refrescar las notas del teléfono en pantalla cada pocos segundos. Esto lo hago porque cuando haya varios usuarios de la aplicación, no es imposible que varias personas cambien notas semi simultaneamente.
  timerEmpezado = false; //Esto está así porque como esta función llama a otra que llama a esta, o pongo una variable de control, o la llama de forma exponencial.
  subscription: Subscription;
  personaEnMemoria:Persona=undefined;
  startTimer(): void {
    this.timerEmpezado = true;
    const source = timer(1000000, 10000000); //TODO: Vincularlo a un config.
    this.subscription = source.subscribe(val => {
      this.dameNumeros(this.numeroEnConsulta)
    }

    )
  }




  //TODO: Al no tener numero, mostrar pasa a ser False.
  mostrar = false;
  numeroEnConsulta = '';

  //Genero un servicio de adquisicion de notas.
  constructor(private notasService: NotasService, private GuardaNotaService: GuardarNotaService, private ObtenPersonaService:ObtenPersonaService) { }


  @ViewChild(DatosPersonaComponent) hijoPersona:DatosPersonaComponent;

  //El array lo pueblo mas adelante, pero lo crearé aquí, mas que nada porque no se si se puede crearlo según recibes los datos.
  arrNotas: Nota[] = [];
  arrPreModel: any;



  //En este caso estamos usando un observer. Esto sólo se disparará al recibir una reacción, pero si recibe mas de una, lo hará varias veces. Lo cual es interesante.
  dameNumeros(tel: any) {
    this.numeroEnConsulta = tel;
    if (tel != '') {

      //Obtenemos las notas asociadas al numero.
      this.notasService.dameNotas(tel).subscribe(nota => {
        this.arrPreModel = nota;
        this.arrNotas = []; // Para que se resetee en vez de alargar la lista.
        for (let i = 0; i < this.arrPreModel.length; i++) {
          this.arrNotas.push(new Nota(this.arrPreModel[i]));
        }

        
        this.mostrar = true;
        if (!this.timerEmpezado) { // Lo que dije en el timer, es una variable de control que impide iniciarse varias veces.
          this.startTimer();
        }
      })
      if(this.hijoPersona!=undefined){
      this.hijoPersona.actualizar(this.numeroEnConsulta);
      }

    };
  }

  //A veces sólo quiero oir a una función sufrir.
  grita() {


    alert("AAAAA");
  }

  checkUncheck(nota: Nota) {
    if (nota.completada == 1) {
      nota.completada = 0;
    }
    else {
      nota.completada = 1;
    }
    this.GuardaNotaService.guardaNota(nota).subscribe();

  }


}

