import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario(): void {
    this.formulario = this.formBuilder.group({
      termoNome: ["", []],
      termoArquivo: { value: "", disabled: false }
    });
  }

  onUploadArquivo(event: any): void {
    const arquivo = event.target.files[0] as File;
    const nome = arquivo.name.toString();

    this.formulario.patchValue({
      termoNome: nome,
      termoArquivo: arquivo
    });
  }
}
