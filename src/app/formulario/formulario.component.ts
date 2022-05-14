import { Component, NgModule, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";



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
