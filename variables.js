//let no permite declarar dos veces la misma variable pero si podemos sobrescribarla o cambiar su valor
/* let nombre="fabian"

console.log(nombre) */

//var permite sobrescribirla y declararla nuevamente es insegura no se usa
//dentro de un scope o bloque SOLO VIVE DENTRO DE EL,el let se puede volver a declara
/* let estado =true;

if(estado){
    console.log("entro al if")
    let estado=false;
    console.log(estado) //SE IMPRIME false ya que esta dentro de un scope
}
console.log(estado) */ //vuelve a su valor inicial TRUE

//otro ejemplo con FOR
/* for(let i=0; i<5;i++){
    console.log(i)
}
console.log(i) */ //imprimi error porque no i solo se declara dentro del ciclo FOR

//const no se puede nombrar  NO SE PUEDE DECLARAR EN UN CICLO FOR, PERO si VIVE EN EL SCOPE ejemplo
// en casi todo los casos se usan CONST
const estado = true;
if (estado) {
  const estado = false;
  console.log(estado);
}

console.log(estado);
