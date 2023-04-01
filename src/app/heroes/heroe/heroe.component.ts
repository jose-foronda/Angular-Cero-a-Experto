import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    public nombre: string = 'IronMan';
    public edad: number = 22;

    public get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }

    public obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    /**
     * cambiarNombre
     */
    public cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    /**
     * cambiarEdad
     */
    public cambiarEdad(): void {
        this.edad = 30;
    }
}