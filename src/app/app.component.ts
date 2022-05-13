import { Component } from '@angular/core';
import { NotasService } from './notas.service';
import {Nota} from "./shared/models/nota.model";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgbdModalComponentModule} from './pag-nota/modal-component.module';


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
  constructor(private notasService: NotasService) {}

  //El array lo pueblo mas adelante, pero lo crearé aquí, mas que nada porque no se si se puede crearlo según recibes los datos.
  arrNotas:any[]=[];
  arrPreModel:any;

  //En este caso estamos usando un observer. Esto sólo se disparará al recibir una reacción, pero si recibe mas de una, lo hará varias veces. Lo cual es interesante.
  dameNumeros(tel:any){
    this.notasService.dameNotas(tel).subscribe(nota=>{
      this.arrPreModel=nota;
      for (let i=0; i<this.arrPreModel.length;i++){
        this.arrNotas.push(new Nota(this.arrPreModel[i]));
      }
      console.log(this.arrNotas); //QUitar luego
      this.mostrar=true;
    }); 
  }

  //Placeholder para acceder a las ediciones.
  grita(id:Nota){
    alert(id.dameDetalles());
  }


  
}
platformBrowserDynamic()
    .bootstrapModule(NgbdModalComponentModule)
    .then(ref => {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }
      window['ngRef'] = ref;

      // Otherwise, log the boot error
    })
    .catch(err => console.error(err));
