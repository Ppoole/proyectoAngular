import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Nota } from '../shared/models/nota.model'
import { AppComponent } from '../app.component';



@Component({
  selector: 'ngbd-modal-todas-notas-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Detalles de la nota.</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
    
    
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
  styleUrls: ["modal-todas-notas.component.scss"]
})
export class ModalTodasNotasContent {


  constructor(public activeModal: NgbActiveModal) {

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

    
      const modalRefNotas = this.modalService.open(ModalTodasNotasContent, { fullscreen:true });
      //modalRefNotas.componentInstance.notaActual = this.notaActual;

    }
  }

