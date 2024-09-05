"use strict";
console.log("Estoy trabajando en tsc -init -w ");
let estudiasteJs = true;
if (estudiasteJs) {
    console.log("tienes las bases para seguir con ts");
}
else {
    console.log("primero aprenda js");
}
let number1 = 11;
let number2 = 21;
function numeros(num1, num2) {
    if (num1 > num2)
        console.log("numero 1 mayor");
    if (num1 < num2)
        console.log("numero 2 mayor");
    if (num1 == num2)
        console.log("numeros iguales");
}
numeros(number1, number2);
let arreglo = [1, 2, 3, 4, 5, 6];
let arreglo2 = ["hola", "mundo", "bendiciones"];
let programador = {
    nombre: 'Brayan Andreys',
    tecnologia: ['React', 'Node', 'Boostrap'],
    Color: true
};
console.log(programador);
let obrero1 = {
    nombre: 'Tommas',
    ocupacion: ['soldador', 'maquinista'],
    codigo: 12245
};
let obrero2 = {
    name: 'otro objeto',
    ocupation: ["otro", "varios"],
    codigo: true
};
function enviarOperario(obrero) {
    console.log(`Este obrero es ${obrero.nombre}`);
}
enviarOperario(obrero1);
