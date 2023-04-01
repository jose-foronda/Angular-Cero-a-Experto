import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public heroeBorrado: string = '';

  /**
   * borrarElemento
   */
  public borrarElemento(): void {
     this.heroeBorrado = this.heroes.pop() || '';
  }

  /**
   * isEmptyString
atributo: string   */
  public isEmptyString(atributo: string): boolean {
    return atributo.length == 0;
  }
}
