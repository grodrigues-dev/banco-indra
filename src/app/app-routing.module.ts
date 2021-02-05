import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancoIndraComponent } from './components/banco-indra/banco-indra.component';

const routes: Routes = [
  { path: '', component: BancoIndraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
