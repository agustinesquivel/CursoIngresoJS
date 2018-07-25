function mostrar()
{

var sexo = prompt("ingrese f ó m .");


while (sexo!="f" && sexo!="m"){
	
	alert ("el sexo no existe");
	sexo=prompt("ingrese un sexo valido");
	
	
}
alert ("el sexo es correcto");
document.getElementById('Sexo').value=sexo;


}//FIN DE LA FUNCIÓN