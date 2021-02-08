import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-banco-indra',
  templateUrl: './banco-indra.component.html',
  styleUrls: ['./banco-indra.component.scss']
})
export class BancoIndraComponent implements OnInit {

  public text = '';
  public formLogin: FormGroup;
  errMsg = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.typingText();
    this.iniciarForm();
  }

  private typingText(): void {
    const text = "Quer negociar com a gente?, Temos uma proposta para você!"
    let newText = "";
    setInterval(() => {
      if (text == newText) {
        newText = ""
      } else {
        newText = `${newText}${text.charAt(newText.length)}`
        this.text = newText;
      }
    }, 300)
  }

  private iniciarForm(): void {
    this.formLogin = this.fb.group({
      agencia: [null, Validators.required],
      conta: [null, Validators.required]
    })
  }

  public validaCampoTipoNumero(input: HTMLFormElement): void {
    const regex = /[^\d]+/g;
    if (input.value.length > input.maxLength) {
      input.value = input.value.slice(0, input.maxLength);
    }
    input.value = input.value.replace(regex, '');
  }

  realizarLogin(): void {
    const clienteCadastrado: Cliente = JSON.parse(localStorage.getItem('cliente')); 
    if(clienteCadastrado === null) {
      this.errMsg = '* dados da conta não encontrados, por favor realizer seu cadastro';
      return;
    }
    if(clienteCadastrado.agencia !=this.formLogin.get('agencia').value || clienteCadastrado.conta != this.formLogin.get('conta').value) {
      this.errMsg = '* usuario ou senha inválidos';
      return;
    }
    localStorage.setItem('usuarioLogado', 'true');
    this.router.navigate(['area-logada'], {
      state: {
       cliente: clienteCadastrado 
      }
    });
  }

  cadastrar(): void {
    this.router.navigate(['cadastro']);
  }

}
