import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from "../formulario/formulario.component";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



import { NgbdModalComponent, NgbdModalContent } from './modal-component';

@NgModule({
  imports: [BrowserModule, NgbModule,FormsModule,ReactiveFormsModule,],
  declarations: [NgbdModalComponent, NgbdModalContent,FormularioComponent],
  exports: [NgbdModalComponent],
  bootstrap: [NgbdModalComponent]
})
export class NgbdModalComponentModule{}
