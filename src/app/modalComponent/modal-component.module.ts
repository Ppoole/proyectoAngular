import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from "../formulario/formulario.component";


import { NgbdModalComponent, NgbdModalContent } from './modal-component';

@NgModule({
  imports: [BrowserModule, NgbModule,],
  declarations: [NgbdModalComponent, NgbdModalContent,FormularioComponent],
  exports: [NgbdModalComponent],
  bootstrap: [NgbdModalComponent]
})
export class NgbdModalComponentModule {}
