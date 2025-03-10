//Ahora se aplicaran funciones pero con la diferencia de pasar valores con argumentos
function suma (a){  //suma(a) parametros
    return a + 10;
}
let resultado = suma(3);  //suma(3) argumentos
console.log(resultado);

//Ahora con dobles argumentos 
function multiplicacion (a , z){
    return a * z;
}
let multi = multiplicacion(10 , 3);
console.log(multi);

//Para ver todos los argumentos asociados en una funcion se utiliza!!
function argumentos (a,b,c,d,e,f,g){
    console.log(arguments);
    return a+b;
} 
let variable = argumentos(1,2,3,6,8,9);
