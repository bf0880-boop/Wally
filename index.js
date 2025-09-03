import { generarEspacio } from "./busqueda.js";
let lista= generarEspacio(100);
console.log(lista);
for(let i=0; i<lista.length; i++){
    let posicionlista= lista [i];
    if (posicionlista==="Wally"){
    console.log("Wally está en la posición " + i)
    }
}