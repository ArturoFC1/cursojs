// Las factory fuctions se usan para poder acortar y no usar tanto codigo repetitivo
function llenarDatos(name, email){   //Por convencio camell case llenarDatos
        return {
        name,
        email,
        activo: true,
        recuperarClave: function(){
            console.log('recuperando clave.....')
        },
    }
}
let boy1 = llenarDatos('arturo','arturo@kohmi.net');
let boy2 = llenarDatos('charly','charly@kohmi.net');

console.log(boy1,boy2);