import { generarEspacio } from "./busqueda.js";
let lista= generarEspacio(100);

console.log(lista);
for(let i=0; i<lista.length; i++){
    let posicionlista= lista [i];
    if (posicionlista==="Wally"){
    console.log("Wally está en la posición " + i)
    }
}
console.log("Nombres que empiezan con W:");
for (let i = 0; i < lista.length; i++) {
  if (lista[i][0] === "W") {
    console.log(lista[i] + " (posición " + i + ")");
  }
}

console.log("Nombres que contienen 'll':");
for (let i = 0; i < lista.length; i++) {
  if (lista[i].includes("ll")) {
    console.log(lista[i] + " (posición " + i + ")");
  }
}