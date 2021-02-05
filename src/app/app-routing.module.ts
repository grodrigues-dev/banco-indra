import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancoIndraComponent } from './components/banco-indra/banco-indra.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AreaLogadaComponent } from './components/area-logada/area-logada.component';

const routes: Routes = [
  { path: '', component: BancoIndraComponent }, 
  { path: 'cadastro', component: CadastroComponent }, 
  { path: 'area-logada', component: AreaLogadaComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
