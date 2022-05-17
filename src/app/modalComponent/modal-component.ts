import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Nota } from '../shared/models/nota.model'
import { AppComponent } from '../app.component';



@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Detalles de la nota.</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
    
    <app-formulario [notaActual]=notaActual [soloTelefono]=soloTelefono></app-formulario>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
  styleUrls: ["../formulario/formulario.component.css"]
})
export class NgbdModalContent {
  @Input() notaActual: Nota;
  @Input() soloTelefono: bigint;

  constructor(public activeModal: NgbActiveModal) {

  }

}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.html'
},

)
export class NgbdModalComponent {
  @Input() notaActual: Nota;
  @Input() soloTelefono: any;
  constructor(private modalService: NgbModal) {
  }





  // Aqui CREO que estoy enviando notaActual al formulario. La verdad, no lo tengo claro, pero si lo quito se rompe.
  open() {

    if (this.soloTelefono == undefined) {
      const modalRef = this.modalService.open(NgbdModalContent, { size: 'xl' });
      modalRef.componentInstance.notaActual = this.notaActual;
    }
    else {
      
      this.soloTelefono=this.soloTelefono.toString(); //Vale, esto es completamente necesario, pues si no, la segunda vez que se llama, soloTelefono es un bigint al que no se puede hacer replace()
      let telMedio = parseInt(this.soloTelefono.replace(/\D/g, ""));//Lo divido en dos cachitos 
      this.soloTelefono = BigInt(telMedio);// porque juntito se pone tontito.


      const modalRef = this.modalService.open(NgbdModalContent, { size: 'xl' }); //Abrimos el modal y lo pasamos bonito. TODO: Avisar y cerrar cuando se guarda.
      modalRef.componentInstance.soloTelefono = this.soloTelefono;

    }
  }

}