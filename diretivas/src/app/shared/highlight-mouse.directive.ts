import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onmouseOver() {
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'  
    );
  }

  @HostListener('mouseleave') onmouseOut() {
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'  
    );
  }
  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { 

  }

}
