/* const frutas =["sandia", "pera"]; */

/* // PUSH agrega elementos al final del array
frutas.push("manzana")

console.log(frutas)

//UNSHIFT() agrega elementos 1 o mas al iniciio

frutas.unshift("banana")
console.log(frutas)

//pop ELIMINA el ultimo elemento del array
//no se especifica nada entre ()
frutas.pop();
console.log(frutas)

const frutaEliminada =frutas.pop(); // se puede hacer asi guardando el elemento borrado en una const
console.log(frutas)

//shift() elimina el primer elemento del array 
const frutaShift=frutas.shift();
console.log(frutaShift)
 */

const frutas = [];

while (confirm("Desea agregar otro elemento al carrito?")) {
  const fruta = prompt("¿que fruta desea comprar?");
  frutas.push(fruta);
}

console.log("Comprastes:");
for (const fruta of frutas) {
  //otro tipo de FOR

  console.log(fruta);
}
