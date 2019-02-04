import { Directive, ElementRef } from '@angular/core';

@Directive({
 selector: 'p[fundoAmarelo]' // adicionando o p, essa diretiva sera aplicada comente a tags do tipo p
//  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef) { 
    this._elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
