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
  selector: 'app-estadisticas',
  template: `
  
  <div class="modal-header">
      <h4 class="modal-title">Ejemplo de estadísticas.</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
    
    <google-chart 
      [type]="type"  
      [title]="title"  
      [data]="data"  
      [columns]="columnNames"  
      [options]="options"  
      [width]="width"  
      [height]="height">  
</google-chart> 

<google-chart 
      [type]="type2"  
      [title]="title2"  
      [data]="data2"  
      [columns]="columnNames2"  
      [options]="options2"  
      [width]="width2"  
      [height]="height2">  
</google-chart> 

<google-chart 
      [type]="type"  
      [title]="title3"  
      [data]="data3"  
      [columns]="columnNames3"  
      [options]="options"  
      [width]="width"  
      [height]="height">  
</google-chart> 
    
    </div>

    

    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>

  `,
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasContent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private SacarTodasNotasService: SacarTodasNotas) { }


  
  arrPreModel: any;
  arrPeligrosidad: number[]=[0,0,0,0,0,0,0,0,0];
  arrImpacto: number[]=[0,0,0,0,0,0,0,0,0];
  arrCompletada: number[]=[0,0]
  

    ngOnInit() {
      
      this.SacarTodasNotasService.sacarTodasNotas('n').subscribe(nota => {
        this.arrPreModel = nota;
        this.arrPeligrosidad=[0,0,0,0,0,0,0,0,0];
        this.arrImpacto=[0,0,0,0,0,0,0,0,0];
        
        for (let i = 0; i < this.arrPreModel.length; i++) {
          this.arrPeligrosidad[this.arrPreModel[i].peligrosidad-1]++;
          this.arrImpacto[this.arrPreModel[i].impacto-1]++;
          this.arrCompletada[this.arrPreModel[i].completada]++;
        }
        console.log(this.arrPeligrosidad)
        

        this.data=[  
          ['Peligrosidad 1', this.arrPeligrosidad[0]],  
          ['Peligrosidad 2', this.arrPeligrosidad[1]],  
          ['Peligrosidad 3', this.arrPeligrosidad[2]],  
          ['Peligrosidad 4', this.arrPeligrosidad[3]],  
          ['Peligrosidad 5', this.arrPeligrosidad[4]],
          ['Peligrosidad 6', this.arrPeligrosidad[5]], 
          ['Peligrosidad 7', this.arrPeligrosidad[6]], 
          ['Peligrosidad 8', this.arrPeligrosidad[7]], 
          ['Peligrosidad 9', this.arrPeligrosidad[8]], 
        ]
          this.data2=[  
            ['Impacto 1', this.arrImpacto[0]],  
            ['Impacto 2', this.arrImpacto[1]],  
            ['Impacto 3', this.arrImpacto[2]],  
            ['Impacto 4', this.arrImpacto[3]],  
            ['Impacto 5', this.arrImpacto[4]],
            ['Impacto 6', this.arrImpacto[5]], 
            ['Impacto 7', this.arrImpacto[6]], 
            ['Impacto 8', this.arrImpacto[7]], 
            ['Impacto 9', this.arrImpacto[8]], 
     
     
       ];  
       this.data3=[  
        ['No completada', this.arrCompletada[0]],  
        ['Completada', this.arrCompletada[1]],  
        
 
 
   ]

      })
    }
  
    


    //Grafico 1
    title = 'Notas por peligrosidad.';  
    type = 'PieChart';  
    data = [  
       ['1', this.arrPeligrosidad[0]],  
       ['2', this.arrPeligrosidad[1]],  
       ['3', this.arrPeligrosidad[2]],  
       ['4', this.arrPeligrosidad[3]],  
       ['5', this.arrPeligrosidad[4]],
       ['6', this.arrPeligrosidad[5]], 
       ['7', this.arrPeligrosidad[6]], 
       ['8', this.arrPeligrosidad[7]], 
       ['9', this.arrPeligrosidad[8]], 
  
  
    ];  
    columnNames = ['Nivel de peligrosidad', 'Cantidad'];  
    options = {      
    };  
    width = 500;  
    height = 300;  


    //Grafico 2

    title2 = 'Notas por impacto.';  
    type2 = 'PieChart';  
    data2 = [  

  
       ['1', this.arrImpacto[0]],  
       ['2', this.arrImpacto[1]],  
       ['3', this.arrImpacto[2]],  
       ['4', this.arrImpacto[3]],  
       ['5', this.arrImpacto[4]],
       ['6', this.arrImpacto[5]], 
       ['7', this.arrImpacto[6]], 
       ['8', this.arrImpacto[7]], 
       ['9', this.arrImpacto[8]], 
  
  
    ];  
    columnNames2 = ['Nivel de Impacto', 'Cantidad'];  
    options2 = {      
    };  
    width2 = 500;  
    height2 = 300;  

    //Grafico 3
    title3 = 'Notas por estado.';  
    type3 = 'PieChart';  
    data3 = [  

  
       ['1', this.arrImpacto[0]],  
       ['2', this.arrImpacto[1]],  
       ['3', this.arrImpacto[2]],  
       ['4', this.arrImpacto[3]],  
       ['5', this.arrImpacto[4]],
       ['6', this.arrImpacto[5]], 
       ['7', this.arrImpacto[6]], 
       ['8', this.arrImpacto[7]], 
       ['9', this.arrImpacto[8]], 
  
  
    ];  
    columnNames3 = ['Completada', 'Cantidad'];  
    

}

@Component({
  selector: 'estadisticas-component',
  templateUrl: './estadisticas.component.html',
  styleUrls: ["estadisticas.component.scss"]
}
)
export class EstadisticasComponent {

  constructor(private modalService: NgbModal) {
  }





  // Aqui CREO que estoy enviando notaActual al formulario. La verdad, no lo tengo claro, pero si lo quito se rompe.
  open() {


    const modalRefNotas = this.modalService.open(EstadisticasContent, { fullscreen: true, scrollable: true });
    //modalRefNotas.componentInstance.notaActual = this.notaActual;

  }
}




