function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){
    case ("Julio"):
    case ("Agosto"):
        alert("Abrigate que hace frio")
        break;
    case ("Marzo"):
    case ("Abril"):
    case ("Mayo"):             
    case ("Junio"):
        alert ("Falta poco Para el invierno")
        break;
    default:
        alert ("Ya paso el frio, ahora el calor")
        break;



}




}//FIN DE LA FUNCIÓN