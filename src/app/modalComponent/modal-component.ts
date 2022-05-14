import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Nota} from '../shared/models/nota.model'



@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
    
    <app-formulario [codNota]=codNota></app-formulario>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() codNota:Nota;
  
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({selector: 'ngbd-modal-component', templateUrl: './modal-component.html'})
export class NgbdModalComponent {
  @Input() codNota:Nota;
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.codNota = this.codNota;
  }
}