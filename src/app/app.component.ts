import { Component, Input ,Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { NotasService } from './notas.service';
import {Nota} from "./shared/models/nota.model";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgbdModalComponentModule} from './modalComponent/modal-component.module';
import {Subscription, timer} from 'rxjs'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  //Creo un timer para refrescar las notas del teléfono en pantalla cada pocos segundos. Esto lo hago porque cuando haya varios usuarios de la aplicación, no es imposible que varias personas cambien notas semi simultaneamente.
  timerEmpezado=false; //Esto está así porque como esta función llama a otra que llama a esta, o pongo una variable de control, o la llama de forma exponencial.
  subscription: Subscription;
  startTimer():void{
    this.timerEmpezado=true;
    const source = timer(1000, 10000); //TODO: Vincularlo a un config.
    this.subscription = source.subscribe(val => {
       this.dameNumeros(this.numeroEnConsulta)
    }

    )
  }
  

  title = 'proyecto';

  //TODO: Al no tener numero, mostrar pasa a ser False.
  mostrar=false;
  numeroEnConsulta='';
  
  //Genero un servicio de adquisicion de notas.
  constructor(private notasService: NotasService, private detectarCambio: ChangeDetectorRef) {  }

  //El array lo pueblo mas adelante, pero lo crearé aquí, mas que nada porque no se si se puede crearlo según recibes los datos.
  
  arrNotas:Nota[]=[];
  arrPreModel:any;
  

  
  //En este caso estamos usando un observer. Esto sólo se disparará al recibir una reacción, pero si recibe mas de una, lo hará varias veces. Lo cual es interesante.
  dameNumeros(tel:any){
    this.numeroEnConsulta=tel;
    if(tel!=''){
    this.notasService.dameNotas(tel).subscribe(nota=>{
      this.arrPreModel=nota;
      this.arrNotas=[]; // Para que se resetee en vez de alargar la lista.
      for (let i=0; i<this.arrPreModel.length;i++){
        this.arrNotas.push(new Nota(this.arrPreModel[i]));
      }
      
      console.log(this.arrNotas); //QUitar luego
      this.mostrar=true;
      if(!this.timerEmpezado){ // Lo que dije en el timer, es una variable de control que impide iniciarse varias veces.
      this.startTimer();
      }
    })}; 
  }
  
  //A veces sólo quiero oir a una función sufrir.
  grita(){
    
    
    alert("AAAAA");
  }
  
 

}

