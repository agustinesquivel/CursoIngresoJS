function mostrar()
{
var dia;
dia=prompt ("ingrese dia de la semana");
dia=dia.toLowerCase();

switch(dia){

    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
    
        alert("A TRABAJAR");
        break;
    
    case "sabado":
    case "domingo":
    
        alert("buen finde");
        break;
    
    default:
    
    alert("no es un dia valido");
    break;
    
}//fin de switch 
}
