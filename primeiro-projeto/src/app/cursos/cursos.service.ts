import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  public getCursos(): string[] {
    return  ['Java External', 'ExtJs', 'Angular'];
  }
}
