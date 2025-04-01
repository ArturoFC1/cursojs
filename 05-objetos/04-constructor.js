function Usuario(){  //Cuando se crean funciones constructoras se utiliza convencion UperCamelCase
    this.id = 1;
    this.funcion = function(){  //A esto no se le llama funcion se llama metodo 
        console.log("Obteniendo usuario.... ");
    }
}

let usuario = new Usuario();
console.log(usuario); 