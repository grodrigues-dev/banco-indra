import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.scss']
})
export class AreaLogadaComponent implements OnInit {

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

}
