import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {NgbdModalComponentModule} from './modalComponent/modal-component.module';
import { NgbdModalComponent } from './modalComponent/modal-component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { FormularioComponent } from "./formulario/formulario.component";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,NgbdModalComponentModule,FormsModule,ReactiveFormsModule,
  ],
  providers: [NgbActiveModal,],
  bootstrap: [AppComponent]
})
export class AppModule { }
