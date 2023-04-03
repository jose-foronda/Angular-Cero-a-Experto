import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  // @Input()
  // public personajes: Personaje[] = [];


  constructor(private dbzService: DbzService) {

  }

  public get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

}
