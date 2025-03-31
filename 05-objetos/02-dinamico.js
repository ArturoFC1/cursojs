/** 
//Para poder realizar lo que es la programacion orientada a objetos POO
//Esta debe de ser dentro de un objeto {};

let objetoPersona = {
    nombre: 'Arturo',
    email: 'arturo@gmail.com',
    direccion: {
        calle: 'Paseo de los sabinos',
        numero: 2,
    },
    activo: true,
    recuperarClave: function (){
        console.log("Recuperando clave");
    }
};
*/

//Cuando es una cosntante esa no puede ser modificada a menos que 
// sea un objeto se pueden quitar o modificar elementos del objeto

const user = {id:1};

user.name = 'Arturo';  //Con esto se pueden agregar atributos a un objeto
user.edad = 23;
user.guardar = function(){    //Tambien se pueden agregar funciones
    console.log("Guardado ", user.name , " y ", user.edad);
}

user.guardar();   //Se llaman de esta manera

delete user.name;
delete user.edad;    //Estos delete sirve para borrar atributos del objeto
delete user.guardar;

console.log(user);

//////////////////////////////////////////////////////////////////////////////
//Tambien existe una manera de solo poder cambiar los valores pero no sus propiedades esta son fijas 
const PruebaSeal = Object.seal({id:1});
console.log(PruebaSeal);
PruebaSeal.nombre = 'Hola';  //No se puede
PruebaSeal.id = 10;

//////////////////////////////////////////////////////////////////////////////
//Existe una manera en donde no se puede cambiar nada ni propiedades ni valores 
const PruebaFreeze = Object.freeze({id:13});
console.log(PruebaFreeze);
PruebaFreeze.nombre = 'Hola';
                                     //No puede cambiar nada
PruebaFreeze.id = 2;