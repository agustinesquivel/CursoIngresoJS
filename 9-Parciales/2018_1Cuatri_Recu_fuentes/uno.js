
function mostrar()
{
var numerobase;
var numeroaltura;
var superficie;
var perimetro;

numerobase=parseInt(prompt("ingrese base del triangulo"));
numeroaltura=parseInt(prompt ("ingrese altura"));
superficie=numerobase*numeroaltura/2;
perimetro=numerobase*3;
alert("la superficie del triangulo es: "+superficie + " el area del triangulo es : "+perimetro);

}
