//En esta parte del codigo se evauan varios if y else en donde se catalogan y evaluan de arriba hacia abajo
let edad = 21;

if (edad > 18){  //Se evalua la primera condicion
    console.log("El usuario es mayor de edad");
}else if (edad > 14){  //Se evalua la segunda condicion en caso de no evaluar la primera
    console.log("El usuario debe de venir con sus papas");
}else{  // Si ninguna de las dos anteriores se evaluaron se dirige a esta
    console.log("El usuario no puede entrar");
}   