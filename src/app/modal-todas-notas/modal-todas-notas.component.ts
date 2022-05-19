import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Nota } from '../shared/models/nota.model'
import { AppComponent } from '../app.component';
import {CommonModule} from '@angular/common';
import { SacarTodasNotas } from '../shared/servicios/SacarTodasNotas.service';



@Component({
  selector: 'ngbd-modal-todas-notas-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Detalles de la nota.</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
    
    <table border=1>
      
    <tr  class="cabecera"><td>Creador</td><td>Fecha</td><td id="contenido">Contenido</td><td>Detalles</td><td>Peligrosidad</td><td>Impacto</td><td>Completada</td></tr>
      <tr *ngFor="let dato of arrNotas"><td>{{dato.creador}}</td>
        <td>{{dato.fecha}}</td>
        <td id="contenido">{{dato.contenido}}</td>
        <td>{{dato.detalles}}</td>
        <td>{{dato.peligrosidad}}</td>
        <td>{{dato.impacto}}</td>
        <td *ngIf="dato.completada==1"><input type="checkbox" checked ></td>
        <td *ngIf="dato.completada==0"><input type="checkbox"></td>
      
    </table>
    
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
  styleUrls: ["modal-todas-notas.component.scss"]
})
export class ModalTodasNotasContent{


  constructor(public activeModal: NgbActiveModal, private SacarTodasNotasService: SacarTodasNotas) {
  }
  arrNotas: Nota[] = [];
  arrPreModel: any;

  ngOnInit() {
    
    this.SacarTodasNotasService.sacarTodasNotas('n').subscribe(nota => {
      this.arrPreModel = nota;
      this.arrNotas = []; // Para que se resetee en vez de alargar la lista.
      for (let i = 0; i < this.arrPreModel.length; i++) {
        this.arrNotas.push(new Nota(this.arrPreModel[i]));
      }
    })
  }
}

@Component({
  selector: 'modal-todas-notas-component',
  templateUrl: './modal-todas-notas.component.html'
},

)
export class ModalTodasNotasComponent {

  constructor(private modalService: NgbModal) {
  }





  // Aqui CREO que estoy enviando notaActual al formulario. La verdad, no lo tengo claro, pero si lo quito se rompe.
  open() {


    const modalRefNotas = this.modalService.open(ModalTodasNotasContent, { fullscreen: true, scrollable: true });
    //modalRefNotas.componentInstance.notaActual = this.notaActual;

  }
}

