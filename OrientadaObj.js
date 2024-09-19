"use strict";
class Pelicula {
    proyectarEncine() {
        console.log(`mi nombre es ${this.nombre} personaje principal`);
    }
    constructor(nombre, protagonista, actores) {
        this.nombre = nombre,
            this.protagonista = protagonista,
            this.actores = actores;
    }
}
const pelicula = new Pelicula('Brayan Andreys', ['Copito', 'Natacha', 'Shakira', 'Reico'], ['Oscar', 'Andrea', 'Lilia', 'Nicol']);
