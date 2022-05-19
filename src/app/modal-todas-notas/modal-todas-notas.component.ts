import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Nota } from '../shared/models/nota.model'
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { SacarTodasNotas } from '../shared/servicios/SacarTodasNotas.service';
import { GuardarNotaService } from '../shared/servicios/GuardarNota.service';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';




@Component({
  selector: 'ngbd-modal-todas-notas-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Todas las notas.</h4>
      <button (click)="SavePDF()">Guardar como PDF</button>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body" #aExportar>
    
    <table border=1>
      
    <tr #todasNotas class="cabecera"><td>Creador</td><td>Teléfono</td><td>Fecha</td><td id="contenido">Contenido</td><td>Detalles</td><td>Peligrosidad</td><td>Impacto</td><td>Completada</td></tr>
      <tr *ngFor="let dato of arrNotas">
        <td [ngClass]="{'Alerta':dato.enFecha(this.horasMaximas)==false&&dato.dameRelevancia(this.pesoPeligrosidad,this.pesoImpacto)>=this.umbralRelevancia&&dato.completada==0}">{{dato.creador}}</td>
        <td [ngClass]="{'Alerta':dato.enFecha(this.horasMaximas)==false&&dato.dameRelevancia(this.pesoPeligrosidad,this.pesoImpacto)>=this.umbralRelevancia&&dato.completada==0}">{{dato.tel}}</td>
        <td [ngClass]="{'Alerta':dato.enFecha(this.horasMaximas)==false&&dato.dameRelevancia(this.pesoPeligrosidad,this.pesoImpacto)>=this.umbralRelevancia&&dato.completada==0}">{{dato.fecha}}</td>
        <td [ngClass]="{'Alerta':dato.enFecha(this.horasMaximas)==false&&dato.dameRelevancia(this.pesoPeligrosidad,this.pesoImpacto)>=this.umbralRelevancia&&dato.completada==0}" id="contenido">{{dato.contenido}}</td>
        <td><span title={{dato.detalles}}>Detalles</span></td>
        <td [ngClass]="{'Alerta':dato.enFecha(this.horasMaximas)==false&&dato.dameRelevancia(this.pesoPeligrosidad,this.pesoImpacto)>=this.umbralRelevancia&&dato.completada==0}">{{dato.peligrosidad}}</td>
        <td [ngClass]="{'Alerta':dato.enFecha(this.horasMaximas)==false&&dato.dameRelevancia(this.pesoPeligrosidad,this.pesoImpacto)>=this.umbralRelevancia&&dato.completada==0}">{{dato.impacto}}</td>
        <td *ngIf="dato.completada==1"><input type="checkbox" (change)="checkUncheck(dato)" checked ></td>
        <td *ngIf="dato.completada==0"><input type="checkbox" (change)="checkUncheck(dato)"></td>
      
    </table>
    <p>Esconder las completas: <input type="checkbox" (change)="cambiarTodas()"></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `,
  styleUrls: ["modal-todas-notas.component.scss"]
})

export class ModalTodasNotasContent {
  @ViewChild('aExportar') aExportar: ElementRef;
  constructor(public activeModal: NgbActiveModal, private SacarTodasNotasService: SacarTodasNotas, private GuardaNotaService: GuardarNotaService) {
  }
  arrNotas: Nota[] = [];
  arrPreModel: any;
  soloCompletas: boolean = false;


  pesoPeligrosidad:number=0.5;
  pesoImpacto:number=0.5;
  horasMaximas:number=24;
  umbralRelevancia:number=4;


  ngOnInit() {

    this.SacarTodasNotasService.sacarTodasNotas('n').subscribe(nota => {
      this.arrPreModel = nota;
      this.arrNotas = []; // Para que se resetee en vez de alargar la lista.
      for (let i = 0; i < this.arrPreModel.length; i++) {
        this.arrNotas.push(new Nota(this.arrPreModel[i]));
      }
    })
  }


  /** Se que deberia poder llamar la de app.component, pero no se y voy a contrarreloj. TODO: Aprender */
  checkUncheck(nota: Nota) {
    if (nota.completada == 1) {
      nota.completada = 0;
    }
    else {
      nota.completada = 1;
    }
    this.GuardaNotaService.guardaNota(nota).subscribe();

  }

  cambiarTodas() {
    if (!this.soloCompletas) {
      this.SacarTodasNotasService.sacarTodasNotas('p').subscribe(nota => {
        this.arrPreModel = nota;
        this.arrNotas = []; // Para que se resetee en vez de alargar la lista.
        for (let i = 0; i < this.arrPreModel.length; i++) {
          this.arrNotas.push(new Nota(this.arrPreModel[i]));
        }
        this.soloCompletas = true;
      })
    }
    else {
      this.SacarTodasNotasService.sacarTodasNotas('n').subscribe(nota => {
        this.arrPreModel = nota;
        this.arrNotas = []; // Para que se resetee en vez de alargar la lista.
        for (let i = 0; i < this.arrPreModel.length; i++) {
          this.arrNotas.push(new Nota(this.arrPreModel[i]));
        }
        this.soloCompletas = false;
      })
    }
  }


  // Sencillo salvador a PDF. TODO: Jugar con el, ponerlo bonito.
  SavePDF(): void {
    let content = this.aExportar.nativeElement;

    let doc = new jsPDF('l', 'px', 'a3');

    
    
    doc.html(content.innerHTML, {
      callback: (pdf) => {
        pdf.setFontSize(7);
        pdf.save("notas.pdf")
      }
    })
    
  }



}






@Component({
  selector: 'modal-todas-notas-component',
  templateUrl: './modal-todas-notas.component.html',
  styleUrls: ["modal-todas-notas.component.scss"]
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

