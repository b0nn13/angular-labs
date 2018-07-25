import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  // Diretivas, Componentes e Pipes
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
  ],
  // Outros modulos que vão ser usados pela aplicacao ou componentes usados nela
  imports: [
    BrowserModule,
    CursosModule
  ],

  // Servicos que ficaram disponiveis para o modulo
  providers: [],

  // Objeto a ser instanciado quando a aplicação iniciar
  bootstrap: [AppComponent]
})
export class AppModule { }
