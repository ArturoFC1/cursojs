//FOR OF se iteran elementos de un arreglo

let arreglo = ['arreglo1', 'arreglo2', 'arreglo3','arreglo2','dasdasd','dasdasdads',];

/**   FOR
let i = 0;
for(i ; i < arreglo.length; i++){
    console.log(arreglo[i])
}
   
WHILE
let i = 0;
while(i < arreglo.length){
    console.log(arreglo[i]);
    i++;
}

DO WHILE
let i = 0;
do{
    console.log(arreglo[i]);
    i++;
}while(i < arreglo.length);
    */

//Con el bucle for of se realiza de la siguiente manera para listar un listado de elemntos
for(let cosas in arreglo){
    console.log(cosas + " "+ arreglo[cosas]);
}