// Operadores logicos (and , or , not)
let mayor = false;
let suscrito = false;

//SI SE TIENE DOS TRUE ES TRUE PERO SI AL MENOS TIENE UN FALSE SERA FALSE AND
console.log('operador and ', mayor && suscrito);

//SI SE TIENE DOS FALSE ES FALSE PERO SI AL MENOS TIENE UN TRUE SERA TRUE OR
console.log('operador or ', mayor || suscrito);

//SE INVIERTE EL VALOR SE CAMBIA POR EJEMPLO DE SI A NO, NOT
console.log('operador not ', !mayor);