import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opinion-emoji',
  templateUrl: './opinion-emoji.component.html',
  
})
export class OpinionEmojiComponent implements OnInit {
  @Input() gradoConfianza:number;
  constructor() {this.gradoConfianza=3; }

  
  ngOnInit(): void {
    this.gradoConfianza=this.gradoConfianza;
  }

}
