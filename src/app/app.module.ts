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
import { ModalTodasNotasComponentModule } from './modal-todas-notas/modal-todas-notas-component.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { EstadisticasComponentModule } from './estadisticas/estadisticas-component.module';








@NgModule({
  declarations: [
    AppComponent,
    OpinionEmojiComponent,
    DatosPersonaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbdModalComponentModule,
    ModalTodasNotasComponentModule,
    FormsModule,ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
    GoogleChartsModule,
    EstadisticasComponentModule,
  ],
  providers: [NgbActiveModal,GuardarNotaService,AppComponent,NuevaNotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
