//Definir cual es el numero mayor entre dos numeros ingeridos en una funcion


function numeromayor (numero1 , numero2){
    if  (numero1 === numero2){
        console.log("Numeros iguales");
    }else if  (numero1 > numero2){
        console.log("["+numero1+"]"+"["+numero2+"]"+"El mayor es el primer numero: "+ numero1 +" > "+numero2);
    }else{
        console.log("["+numero2+"]"+"["+numero1+"]"+"El mayor es el primer numero: "+ numero2 +" > "+numero1);
    }
}
numeromayor(0,11);

