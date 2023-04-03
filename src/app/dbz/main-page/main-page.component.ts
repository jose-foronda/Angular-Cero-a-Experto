import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // private dbzService: DbzService = [];

  // constructor(dbzService: DbzService) {
  //   this.dbzService = dbzService;
  // }
 
  constructor(private dbzService: DbzService) { 
  }


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

  /**
   * agregarNuevoPersonaje
   */
  public agregarNuevoPersonaje(argumento: Personaje) {
    console.log("Agregando nuevo personaje");
   // debugger; // like a handwritten breakPoint. I tested it in Edge and Chrome
    this.personajes.push(argumento);
  }
}
