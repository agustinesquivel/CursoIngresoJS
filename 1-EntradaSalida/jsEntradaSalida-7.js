/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numuno;
	var numdos;
	var resultado;
	numuno=document.getElementById('numeroUno').value;
	numuno=parseInt(numuno);
	numdos=document.getElementById('numeroDos').value;
	numdos=parseInt(numdos);
	resultado=numuno+numdos;
	alert("La suma es "+resultado);
}

function restar()
{
	var numuno;
	var numdos;
	var resultado;
	numuno=document.getElementById('numeroUno').value;
	numuno=parseInt(numuno);
	numdos=document.getElementById('numeroDos').value;
	numdos=parseInt(numdos);
	resultado=numuno-numdos;
	alert ("La resta es "+ resultado);
}

function multiplicar()
{ 
	var numuno;
	var numdos;
	var resultado;
	numuno=document.getElementById('numeroUno');
	numuno=parseInt(numuno);
	numdos=document.getElementById('numeroDos');
	resultado=numuno*numdos;
	alert ("La multiplicacion es "+ resultado);
}

function dividir()
{
	var numuno;
	var numdos;
	var resultado;
	numuno=document.getElementById('numeroUno').value;
	numuno=parseInt(numuno);
	numdos=document.getElementById('numeroDos').value;
	numdos=parseInt(numdos);
	resultado=numuno/numdos;
	alert ("La division es "+ resultado);
}

