import { NgModule } from '@angular/core';
import { BrowserModule,} from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from "../formulario/formulario.component";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'




import { ModalTodasNotasComponent, ModalTodasNotasContent } from './modal-todas-notas.component';

@NgModule({
  imports: [BrowserModule, NgbModule,FormsModule,ReactiveFormsModule,CommonModule],
  declarations: [ModalTodasNotasComponent, ModalTodasNotasContent],
  exports: [ModalTodasNotasComponent],
  bootstrap: [ModalTodasNotasComponent]
})
export class ModalTodasNotasComponentModule{}
