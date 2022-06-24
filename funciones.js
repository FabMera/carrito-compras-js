//funciones DECLARATIVAS

/* function numAleatorioRango(min, max){
    return Math.floor(Math.random() *(max - min)) +min
}
console.log(numAleatorioRango(1,10));

//funcion expresada guardada en una variable
const numAzar = function(min, max){
    return Math.floor(Math.random() *(max -min)) +min
}
console.log(numAzar(5,13)) */

//POR EL HOISTING PODEMOS INVOCAR LA FUNCION DECLARATIVA  ARRIBA  antes de escribirla pero no LA EXPRESADA.

//Arrow FUNCTION estructura BASICA

/* const azarFlecha = (min, max) =>{
    return Math.floor(Math.random() *(max -min)) + min
} */
// si la funcion flecha esta en una sola linea se puede sacar las llaves y el return ya que
//se llama de manera implicita.
//asi:
/* const azarFlecha = (min, max) => (Math.floor(Math.random() *(max -min)) + min);

console.log(azarFlecha(1,5)); */

// SI solo tenemos 1 parametro podemos sacar sus parentesis ASI:
//EJEMPLO CON 1 PARAMETRO numero max


/* const azarFlecha = max => Math.floor(Math.random() * (max- 1)) + 1;
console.log(azarFlecha(5)); */

//Otra forma de hacerlo:
const azarFlecha =(min = 1, max = 100)=>
    Math.floor(Math.random() * (max -min)) + min;

    //si quiero no colocar 1 de los parametros agrego NULL
console.log(azarFlecha(null,50))