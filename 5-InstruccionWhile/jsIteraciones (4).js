function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

while (numero<0 || numero>10){
	numero=parseint(numero);
	alert ("el numero no existe");
	numero=prompt("ingrese un numero entre 0 y 10 ");
}
alert ("el numero es correcto");
}//FIN DE LA FUNCIÓN