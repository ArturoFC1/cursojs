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