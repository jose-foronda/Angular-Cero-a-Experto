import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public personajes: Personaje[] = [{
    nombre: 'Goku',
    poder: 15000,
  },
  {
    nombre: 'Vegeta',
    poder: 7500,
  }]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
 

  /**
   * cambiarNombre
   */
  public cambiarNombre(event: any): void {
    console.log(event);
    console.log(this.nuevo);
  }
}
