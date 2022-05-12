import { Component } from '@angular/core';
import { NotasService } from './notas.service';

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
  arrNotas:any;

  //En este caso estamos usando un observer. Esto sólo se disparará al recibir una reacción, pero si recibe mas de una, lo hará varias veces. Lo cual es interesante.
  dameNumeros(tel:any){
    this.notasService.dameNotas(tel).subscribe(nota=>{
      this.arrNotas=nota;
      console.log(this.arrNotas); //QUitar luego
      this.mostrar=true;
    }); 
  }

  //Placeholder para acceder a las ediciones.
  grita(id:any){
    alert(id)
  }

}

