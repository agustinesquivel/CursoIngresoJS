function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var promedio;
	contador=0
	acumulador=0
	respuesta='si'


	while (respuesta != "n"){
		contador++;
		numero=prompt ("ingrese numero #"+contador);
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta=prompt ("desea seguir ingresando numeros?")

	}

	promedio=acumulador/contador;
document.getElementById('suma').value="la suma es"+acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN