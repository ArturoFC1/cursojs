/** 

* Crear una funcion en el cual identifique las resoluciones adquiridas, pueden ser mayor pero no menor
Nombre: ancho x alto
8K 7680 x 4320
4K 3840 x 2160
WQHD 2560 x 1440
FHD 1920 x 1080
Alta definición 1280 x 720 
*/

function resolucion(ancho , alto){
    if(ancho >= 7680 && alto > 4320){
            return "Resolucion 8K";
        }else if(ancho >= 3840 && alto > 2160){
            return "Resolucion 4K";
        }else if(ancho >= 2560 && alto > 1440){
            return "Resolcion WQHD";
        }else if(ancho >= 1920 && alto > 1080){
            return "Resolucion FHD";
        }else if(ancho >= 1280 && alto > 720){
            return "Resolucion Alta definicion";
        }else{
            return "Resolucion incorrecta";
        }
    }
let tamañosname = resolucion (7680,721);
console.log(tamañosname);
