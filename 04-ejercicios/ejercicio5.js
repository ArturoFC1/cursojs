// Crear algoritmo que devuelva el numero menor y mayor de un array

let arreglo = [100,3,4,5,6,7,8];
let nuevo = [0];


function getMayorMenor (array){
    for (let i = 0; i <= (arreglo.length + 1); i++){
        if  (nuevo[0] >= array[i+1]){
            array[i] = nuevo[i];
        }
    }
    console.log(nuevo[0]);
    
}

getMayorMenor(arreglo);