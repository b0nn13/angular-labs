import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  // componentes, pipes e diretivas declarados no modulo
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  // exporta o componente para fora do modulo
  exports:  [
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
