import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://fab.io/me';
  urlImagem: string = 'http://lorempixel.com/400/200/nature';
  cursoAngular: boolean = true;

  valorAtual: string;
  valorSalvo: string;

  isMouseOver: boolean;

  nome: string = 'abc';
  
  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  constructor() { }

  
  ngOnInit() {
    this.nome = 'abc';
  }

  getValor() {
    return 1;
  }

  botaoClicado(){
    alert('botaClicado')
  }

  eventoTecla(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
    console.info(this.valorAtual);
  }

  setValor(valor) {
    this.valorSalvo = valor;
  }

  getCurtirCurso() {
    return true;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento);
  }
}
