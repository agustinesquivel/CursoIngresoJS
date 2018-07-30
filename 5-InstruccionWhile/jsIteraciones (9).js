function mostrar()
{

	var contador=0;
	// declarar variables
	var mayor;
	var menor;
	var respuesta;
	var bandera=0;

	while(respuesta!='n')
	{
		contador++;
		numero=prompt ("ingrese numero #"+contador);
		numero=parseInt (numero);
		if(contador==1){
			menor=numero
			mayor=numero
			bandera=1 /*solo entra una vez*/
		}
		if (numero<menor)
		{
			menor=numero;
		}	
		if (numero>mayor)
		{
			mayor=numero;
		}	
		respuesta=prompt ("desea seguir ingresando numeros?");

	}

document.getElementById('minimo').value=menor;
document.getElementById('maximo').value=mayor;


}//FIN DE LA FUNCIÓN