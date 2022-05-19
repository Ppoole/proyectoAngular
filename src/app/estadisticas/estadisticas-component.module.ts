import { NgModule } from '@angular/core';
import { BrowserModule,} from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'
import { GoogleChartsModule } from 'angular-google-charts';
import { EstadisticasComponent, EstadisticasContent } from './estadisticas.component';

@NgModule({
  imports: [BrowserModule, NgbModule,FormsModule,ReactiveFormsModule,CommonModule,GoogleChartsModule,GoogleMapsModule],
  declarations: [EstadisticasComponent, EstadisticasContent],
  exports: [EstadisticasComponent],
  bootstrap: [EstadisticasComponent]
})
export class EstadisticasComponentModule{}
