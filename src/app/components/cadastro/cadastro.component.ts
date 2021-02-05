import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { timeMasks } from 'ngx-mask';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public formCadastro: FormGroup;
  errMsg = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  private iniciarForm(): void {
    this.formCadastro = this.fb.group({
      nome: [null, Validators.minLength(3)],
      cpf: [null, Validators.required],
      celular: [null, Validators.required],
      email: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      senha: [null, Validators.required],
      confirmarSenha: [null, Validators.required],
      termosAceitos: [null, Validators.requiredTrue],
      receberEmail: [null, ''],
    })
  }

  validarSenhas(): void {
    if(this.formCadastro.get('senha').value != this.formCadastro.get('confirmarSenha').value) {
      this.errMsg = 'As senhas não correspondem';
    } else {
      this.errMsg = ''
    }
  }


  submeterFormulario() {
    this.router.navigate([''])
  }

}
