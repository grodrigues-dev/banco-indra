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
    lancamentos: [
      {
        descricao: 'Café Jandirense',
        valor: 'R$35,47',
      }, 
      {
        descricao: 'Supermercado Sol',
        valor: 'R$ 229,81 ',
      }
    ] 
  }, {
    data: '07/02',
    lancamentos: [
      {
        descricao: 'Saque caixa rápido',
        valor: 'R$800,00',
      }, 
      {
        descricao: 'Farmácia DrogaLiz',
        valor: 'R$ 32,77 ',
      }
    ] 
  }
 ]

  cliente: Cliente;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('cliente'));
  }

  sair(): void {
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['']);
  }

  lancamentos: {}

}
