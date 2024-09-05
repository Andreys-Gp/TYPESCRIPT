console.log("Estoy trabajando en tsc -init -w ");

let estudiasteJs: boolean = true;
if (estudiasteJs) {
  console.log("tienes las bases para seguir con ts");
} else {
  console.log("primero aprenda js");
}

let number1: number = 11;
let number2: number = 21;
function numeros(num1: number, num2: number): void {
  if (num1 > num2) console.log("numero 1 mayor");
  if (num1 < num2) console.log("numero 2 mayor");
  if (num1 == num2) console.log("numeros iguales");
}

numeros(number1, number2);

let arreglo: number[] = [1, 2, 3, 4, 5, 6];
let arreglo2: string[] = ["hola", "mundo", "bendiciones"];

type TypeProgramador={
  nombre:string,
  tecnologia:string[],
  Color:boolean | null
}
let programador:TypeProgramador={
  nombre:'Brayan Andreys',
  tecnologia:['React','Node','Boostrap'],
  Color:true
}
console.log(programador)

interface obrero{
  nombre:string,
  ocupacion:string[],
  codigo:number | null
}

let obrero1:obrero={
  nombre:'Tommas',
  ocupacion:['soldador','maquinista'],
  codigo: 12245
}

let obrero2={
  name:'otro objeto',
  ocupation:["otro","varios"],
  codigo: true
}

function enviarOperario (obrero:obrero) {
  console.log(`Este obrero es ${obrero.nombre}`)
}

enviarOperario(obrero1)
