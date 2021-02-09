import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Lancamento } from 'src/app/models/lancamento';


@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.scss']
})
export class AreaLogadaComponent implements OnInit {

  mockLancamentos: Lancamento[] = [{
    data: '06/02',
    transacoes: [
      {
        descricao: 'Café Jandirense',
        valor: 'R$35,47',
        tipo: 'alimentacao'
      }, 
      {
        descricao: 'Supermercado Sol',
        valor: 'R$ 229,81 ',
        tipo: 'supermercado'
      }
    ] 
  }, {
    data: '07/02',
    transacoes: [
      {
        descricao: 'Saque caixa rápido',
        valor: 'R$800,00',
        tipo: 'saque'
      }, 
      {
        descricao: 'Farmácia DrogaLiz',
        valor: 'R$ 32,77 ',
        tipo: 'saude'
      }
    ] 
  }
 ]

  cliente: Cliente;
  lancamentos: Lancamento[];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('cliente'));
    this.lancamentos = this.mockLancamentos;
  }

  sair(): void {
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['']);
  }
  

  obterIconesLancamento(tipo: string): string {
    return `assets/${tipo}.svg`;
  }



}
