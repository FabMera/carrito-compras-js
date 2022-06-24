//el objeto puede recibir cualquier dato,funciones,array,enteros booleanos

/* const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  //funcion de objeto gato
  comer(alimento) {  //forma correcta de hacerlo envez de function
    console.log (`${this.nombre} comiendo ${alimento}`); //hay que utilizar THIS para llamar una variable del objeto 
  },
  //no se puede utilizar una funcion de flecha como METODO,pero si colocarla DENTRO DE UN METODO
  listarEnemigos(){
    this.enemigos.forEach((item) => console.log(item))
  },
};
gato.comer("pez")
gato.listarEnemigos();
 */
/* console.log(gato);
console.log(gato.nombre)
console.log(gato["enemigos"]);
console.log(gato.enemigos[0]); 

gato.color = "azul";
console.log(gato)
gato.edad =25;
console.log(gato)
console.log(gato.hasOwnProperty("edad")) //podemos ver si existe TRUE o False de alguna propiedad
//otra forma de hacerlo
 */

const gato ={
    nombre: "lucas",
    duerme: true,
    enemigos :["agua","perros"]
};
//FOR OFF SOLO PARA ARRAYS

for (let propiedad in gato) {
    /* console.log(propiedad); */
    console.log(gato [propiedad])
}
