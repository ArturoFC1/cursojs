let nombre = "Arturo";
let apellido = "Figueroa";
let Edad = 23;

// Declaramos los objetos
let personaje = {
    nombre : "Arturo",
    apellido  : "Figueroa",
    Edad : 23 ,
};
console.log (personaje);

//Se pueden llamar a los obejetos por cualquiera de estas 2
console.log(personaje.nombre);
console.log(personaje['nombre']);


//Para cambiar valor de los objetos
personaje.apellido = "ibañez";
console.log(personaje.apellido);

//Para borrar datos de objeto
delete personaje.nombre;
console.log(personaje);
