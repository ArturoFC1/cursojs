//Evalua segun la posicionde donde esta evaluando el true por ejemplo: 

console.log([] || {});  //OR el primero que evalua en true
console.log([] && {});  //AND el ultimo que evalua en true  

console.log(' ');


let nombre = '';
let username = nombre || 'Anonimo'; //OR evalua el valor de la izquierda si es falsy evalua el valor de la derecha
console.log(username);

console.log(' ');


let nombre1 = 'arturo';
let usernamee = 'Anonimo' && nombre1; //And evalua el segundo valor de la derecha o en true
console.log(usernamee);

console.log(' ');


function num(){
    console.log("Soy funcion 1");
    return false;
}

function num1(){
    console.log("Soy funcion 2");
    return true;
}

let y = num() && num1();