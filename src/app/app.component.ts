import { Component, Input ,Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { NotasService } from './notas.service';
import {Nota} from "./shared/models/nota.model";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgbdModalComponentModule} from './modalComponent/modal-component.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  
  title = 'proyecto';

  //TODO: Al no tener numero, mostrar pasa a ser False.
  mostrar=false;
  
  //Genero un servicio de adquisicion de notas.
  constructor(private notasService: NotasService, private detectarCambio: ChangeDetectorRef) {  }

  //El array lo pueblo mas adelante, pero lo crearé aquí, mas que nada porque no se si se puede crearlo según recibes los datos.
  
  arrNotas:Nota[]=[];
  arrPreModel:any;

  //En este caso estamos usando un observer. Esto sólo se disparará al recibir una reacción, pero si recibe mas de una, lo hará varias veces. Lo cual es interesante.
  dameNumeros(tel:any){
    this.notasService.dameNotas(tel).subscribe(nota=>{
      this.arrPreModel=nota;
      this.arrNotas=[]; // Para que se resetee en vez de alargar la lista.
      for (let i=0; i<this.arrPreModel.length;i++){
        this.arrNotas.push(new Nota(this.arrPreModel[i]));
      }
      
      console.log(this.arrNotas); //QUitar luego
      this.mostrar=true;
    }); 
  }
  
  //Placeholder para acceder a las ediciones.
  grita(){
    
    
    alert("AAAAA");
  }

 

}

