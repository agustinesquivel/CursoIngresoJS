/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numuno;
	var numdos;
	var resultado;
	numuno=document.getElementById('numeroDividendo').value;
	numuno=parseInt(numuno);
	numdos=document.getElementById('numeroDivisor').value;
	numdos=parseInt(numdos);
	resultado=numuno%numdos;
	alert("El resto es: "+resultado);
	//si el resto es 0 
}
