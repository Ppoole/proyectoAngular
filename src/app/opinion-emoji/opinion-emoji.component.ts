import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Persona } from '../shared/models/persona.model';
import { GuardarPersonaService } from '../shared/servicios/GuardarPersona.service';

@Component({
  selector: 'app-opinion-emoji',
  templateUrl: './opinion-emoji.component.html',

})
export class OpinionEmojiComponent implements OnChanges {
  @Input() personaActual: Persona;
  gradoConfianza = 3;
  constructor(private GuardarPersonaService: GuardarPersonaService) {
  }


  ngOnChanges(): void {
    this.gradoConfianza = this.personaActual.nivelContento;
  }



  cambiaCara(nuevaCara: number) {
    this.personaActual.nivelContento = nuevaCara;
    this.gradoConfianza = this.personaActual.nivelContento;


    this.GuardarPersonaService.guardaPersona(this.personaActual).subscribe();

  }

}
