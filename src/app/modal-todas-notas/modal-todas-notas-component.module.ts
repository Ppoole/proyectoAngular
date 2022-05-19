import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



import { ModalTodasNotasComponent, ModalTodasNotasContent  } from './modal-todas-notas.component';

@NgModule({
  imports: [BrowserModule, NgbModule,FormsModule,ReactiveFormsModule,],
  declarations: [ModalTodasNotasComponent, ModalTodasNotasContent],
  exports: [ModalTodasNotasComponent],
  bootstrap: [ModalTodasNotasComponent]
})
export class ModalTodasNotasComponentModule {}
