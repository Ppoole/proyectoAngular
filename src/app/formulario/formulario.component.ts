import { Component, NgModule, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Nota } from "../shared/models/nota.model";



@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  email: FormControl;
  clave: FormControl;
  formulario: FormGroup;
  resultado:string;
  @Input() codNota:Nota;
  constructor() {}

  ngOnInit() {
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.clave = new FormControl("", [
      Validators.required,
      Validators.minLength(4)
    ]);
    this.formulario = new FormGroup({ email: this.email, clave: this.clave });
  }
}
