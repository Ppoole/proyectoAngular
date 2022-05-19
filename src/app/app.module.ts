import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {NgbdModalComponentModule} from './modalComponent/modal-component.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GuardarNotaService } from './shared/servicios/GuardarNota.service';
import { NuevaNotaService } from './shared/servicios/NuevaNota.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { OpinionEmojiComponent } from './opinion-emoji/opinion-emoji.component';
import { DatosPersonaComponent } from './datos-persona/datos-persona.component';
import { ModalTodasNotasComponent } from './modal-todas-notas/modal-todas-notas.component';






@NgModule({
  declarations: [
    AppComponent,
    OpinionEmojiComponent,
    DatosPersonaComponent,
    ModalTodasNotasComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,NgbdModalComponentModule,FormsModule,ReactiveFormsModule,AngularSvgIconModule.forRoot()
  ],
  providers: [NgbActiveModal,GuardarNotaService,AppComponent,NuevaNotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
