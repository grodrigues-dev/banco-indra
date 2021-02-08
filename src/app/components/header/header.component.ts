import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  exibirMenuMobile = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenuMobile(): void {
    this.exibirMenuMobile = !this.exibirMenuMobile;
  }

}
