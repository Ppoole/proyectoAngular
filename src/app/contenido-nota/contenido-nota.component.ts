import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contenido-nota',
  templateUrl: './contenido-nota.component.html',
  styleUrls: ['./contenido-nota.component.scss']
})

@Component({
  selector: 'ngbd-modal-content',
  templateUrl:'../contenido-nota/contenido-nota.component.html'
})


export class NgbdModalContent {
  @Input() name:string;
  
  constructor(public activeModal: NgbActiveModal) {}
}


@Component({template:''})
export class ContenidoNotaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
