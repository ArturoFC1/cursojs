//Crear programa para poder calcular el valor total mas el impuesto, el impuestpo es del 15%
let valores = 1690;
let impuesto = 0.10;

function valortotal(valores, impuesto){
    let timpuestos = (valores * impuesto);
    let total = (timpuestos + valores);
    return total;
}

let resultado = valortotal(valores,impuesto);
console.log("Valor total sin impuestos: "+valores);
console.log("Valor total con impuestos: "+resultado)