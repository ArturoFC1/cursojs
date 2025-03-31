//Crear un algoritmo para poder sacar la cantidad de numeros positivos de un array

let array = [2,4,2,-2,-4,1,4,7,-2,9];


function getPositivos(arreglo){
    let count = 0;
    for (let i = 0; i <= array.length; i++){
        if  (arreglo[i] >= 0){
            count++;
        }
    }
    return count;
}

let cantidad = getPositivos(array);
console.log(cantidad);

    
