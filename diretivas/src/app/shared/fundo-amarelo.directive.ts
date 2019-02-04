import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
 selector: 'p[fundoAmarelo]' // adicionando o p, essa diretiva sera aplicada comente a tags do tipo p
//  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer) { 
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }

}
