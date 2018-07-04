/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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
alert("la suma es "+resultado);

}
