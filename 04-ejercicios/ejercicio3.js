/** 
Realizar una funcion en donde contenga un arreglo y su indice, validar que el arreglo existe
al igual que el indice, ademas validar que nos sea menor a 0 */

function arreglos(arreglo,indice){
    if  (indice < 0){
        console.log("El indice no puede ser menor a cero")
    }else{
        for(let i = 0; i < arreglo.length; i++){
            if (indice == i){
                console.log("El arreglo si existe");
                a = 1;
            }
        }
        if (a == 0){
            console.log("El indice no coincide con el arreglo");
        }  
    }
}
let a = 0;
let arrays = ['1','20','3','4','5'];
let numero = 0;
 
arreglos(arrays,numero);

