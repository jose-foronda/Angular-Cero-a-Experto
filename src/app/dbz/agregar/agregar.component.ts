import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
 
  
  @Input()
  public nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output()
  public onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  public agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    console.log(this.nuevo);
    // emitting nuevo
    this.onNuevoPersonaje.emit(this.nuevo);


     this.nuevo = {
      nombre: '',
      poder: 0
    };
    
   }
}
