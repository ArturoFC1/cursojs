// Crear algoritmo que devuelva el numero menor y mayor de un array con su posicion

let arreglo = [-3232,400,-4,-500,-6,-7,0];
let mayor = arreglo[0];
let menor = arreglo[0];
let mayorp = 0;
let menorp = 0;


function getMayorMenor (array){
    for (let i = 0; i <= (arreglo.length); i++){
        if  (array[i] >= mayor){
            mayor = array[i];
            mayorp = i;
            
        }
        if (array[i] <= menor){
            menor = array[i];
            menorp = i;
        }
    }
    console.log("Numero mayor: "+mayor+ " y su posicion: "+mayorp);
    console.log("Numero menor: "+menor+ " y su posicion: "+menorp);
}

getMayorMenor(arreglo);