function mostrar()
{
var nombre;
var peso;
var temperaturahabitat;
var contador;
var respuesta;
respuesta="s";
var acumuladorN;
acumuladorN=1;

    while(respuesta=="s"){
    nombre=prompt("ingrese el nombre del animal");
    respuesta=prompt ("desea seguir ingresando animales?");
   acumuladorN=acumuladorN+nombre;
   acumuladorN++;
    console.log(acumuladorN);

    }

}
