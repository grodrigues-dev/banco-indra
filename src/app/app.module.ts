import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BancoIndraComponent } from './components/banco-indra/banco-indra.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AreaLogadaComponent } from './components/area-logada/area-logada.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent, 
    BancoIndraComponent,
    CadastroComponent,
    AreaLogadaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),  
  ],
  providers: [],
  bootstrap: [AppComponent], 
})
export class AppModule { }
