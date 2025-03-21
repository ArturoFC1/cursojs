let arreglo = {
    nombre: 'Arturo',
    edad: 15,
    sexo: 'masculino',
};
for (let datos in arreglo){
    console.log(datos + ": "+arreglo[datos]);
}