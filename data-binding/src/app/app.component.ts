import { Component } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works !';

  valor: number = 5;
  destruirCiclo: boolean;

  mudarValor() {
    this.valor++;
  }

  destruiCiclo(){
    this.destruirCiclo = !this.destruirCiclo;
  }
}
