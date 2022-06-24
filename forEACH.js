const frutas = ["pera", "manzana", "frutillas", "cerezas"];

//parametro fruta con foreach 1 vez por cada elemento del array

/* frutas.forEach( (fruta) => console.log(fruta)); */ //una manera de hacerse
//for each con posicion e indice,optativos
frutas.forEach((fruta, index) => {
  console.log(`${index}: ${fruta}`);
});
