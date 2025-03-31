//Crear un array de n numeros
let tamaño = 3;
let arreglo = [];

function asignararreglo(tamaño){
    if  (tamaño > 0){
        for (let i = 0; i < tamaño; i++){
            arreglo[i] = i+1;
        }
        return arreglo;
    }else{
        return "No se puede menor a 0";
    }
}

let resultado = asignararreglo(tamaño);
console.log(resultado);


