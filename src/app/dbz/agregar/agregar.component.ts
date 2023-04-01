import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input()
  public personajes: Personaje[] = [];
  
  @Input()
  public nuevo: Personaje = {
    nombre: '',
    poder: 0
  }


  public agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
    console.log(this.nuevo);
    console.log(this.personajes);
  }
}
