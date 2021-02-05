import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public formCadastro: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  private iniciarForm(): void {
    this.formCadastro = this.fb.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      celular: [null, Validators.required],
      email: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      senha: [null, Validators.required],
      confirmarSenha: [null, Validators.required],
      termosAceitos: [null, Validators.requiredTrue],
      receberEmail: [null],
    })
  }

}
