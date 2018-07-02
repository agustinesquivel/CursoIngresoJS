/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function mostrar()
{
	/*alert ("ejercicio 3");
	console.log ("esto es un mensaje con log");
	*/
	var nombre
	nombre=document.getElementById('elNombre').value ;
	/*para sumar se indica .value al final de la linea
	para obtener document.getElementById sin errores se presiona 
	el comienzo hasta (.) luego get y tab shift +i*/
	alert ("su nombre es: "+ nombre);
}


