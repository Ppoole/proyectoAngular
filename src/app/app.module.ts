import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {NgbdModalComponentModule} from './modalComponent/modal-component.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GuardarNotaService } from './shared/servicios/GuardarNota.service';
import { NuevaNotaService } from './shared/servicios/NuevaNota.service';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,NgbdModalComponentModule,FormsModule,ReactiveFormsModule,
  ],
  providers: [NgbActiveModal,GuardarNotaService,AppComponent,NuevaNotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
