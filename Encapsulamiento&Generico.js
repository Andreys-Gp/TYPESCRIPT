"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTickect(tickect) {
        this.tickect = tickect;
    }
    getTickect() {
        return this.tickect;
    }
    sortear() {
        return `Para ${this.nombre} el tickect es ${this.tickect}`;
    }
}
let sorteo = new Sorteo('Brayan');
sorteo.setTickect(8);
console.log(sorteo.sortear());
