import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../models/cliente';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public formCadastro: FormGroup;
  public errMsg = '';
  public cliente: Cliente;


  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private modalService: NgbModal
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
    if (this.formCadastro.get('senha').value != this.formCadastro.get('confirmarSenha').value) {
      this.errMsg = 'As senhas não correspondem';
    } else {
      this.errMsg = '';
    }
  }

  cadastrarCliente(modal): void {
    const cliente: Cliente = {
      nome: this.formCadastro.get('nome').value,
      cpf: this.formCadastro.get('cpf').value,
      celular: this.formCadastro.get('celular').value,
      email: this.formCadastro.get('email').value,
      dataNascimento: this.formCadastro.get('dataNascimento').value,
      senha: this.formCadastro.get('senha').value,
      termosAceitos: this.formCadastro.get('termosAceitos').value,
      receberEmail: this.formCadastro.get('receberEmail').value,
      agencia: Math.floor(Math.random() * 100000).toString(),
      conta: Math.floor(Math.random() * 10000).toString()
    }
    this.cliente = cliente; 
    localStorage.setItem('cliente', JSON.stringify(cliente));
    this.openModal(modal);
  }

  openModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  navegarParaLogin(): void {
    this.modalService.dismissAll();
    this.router.navigate(['']);
  }

  voltar(): void {
    this.router.navigate(['']);
  }

}
