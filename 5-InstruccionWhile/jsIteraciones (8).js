function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var respuesta;
	var numero;
	contador=0
	positivo=0
	negativo=1
	respuesta='si'


	while (respuesta != "n"){
		contador++;
		numero=prompt ("ingrese numero #"+contador);
		numero=parseInt(numero);
		respuesta=prompt ("desea seguir ingresando numeros?");

	if (numero>0){
		positivo= numero+positivo
	}else{
		negativo= numero*negativo
	}
}
/*agregar if que descarte a 0*/
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN