/*ingreso:
maria f 15
jose m 33
pepe m 81

mostrar:
	cantidad
	1) Mayores de edad=2
	2)Menores de edad=1
	3) cantidad de mujeres=1
	4) cantidad de hombres=2
	5) nombre 
		mostrar Mayor edad= pepe
		mostrar menor edad= maria
		mostrar hombre de menor edad  =jose

nombre sin validar y sexo sin validar
*/		
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var cantidadmujeres;
	var cantidadhombres;
	var contador;
	var contadorMayoresDeEdad;
	var nombrehombremenor;
	var nombrehombrmayor;
	var contadorMenoresDeEdad;
	var edadhombremenor;
	var mayoredad;
	var menoredad;

	contadorMayoresDeEdad=0;
	contadorMenoresDeEdad=0
	mayoredad=0;
	menoredad=0;
	contador=0;
	cantidadhombres=0;
	cantidadmujeres=0;
	while(contador<3){
		contador++;
		nombre=prompt("ingrese name");
		sexo=prompt ("ingrese sexo");
		while (sexo !="f" && sexo!="m")
		{
			sexo=prompt("error.ingrese sexo");
		}
		edad=parseInt( prompt("ing edad"));
		while (edad<0 || edad >100)
		{
			edad=prompt ("error. ingrese edad");
		}
	if(edad>18)
	{
		contadorMayoresDeEdad++;
	}else{
		contadorMenoresDeEdad++;
	}
	if (sexo=="f"){
		cantidadmujeres++;
	}else{
		cantidadhombres++;
	}
	if(edad>mayoredad || contador==0){
		mayoredad=edad;
		nombrehombrmayor=nombre;
	}
	if (edad < menoredad || contador==0){
		menoredad=edad;
		nombrehombremenor=nombre;
		contador=1;
	}
	if (sexo=="m" && cantidadhombres==1){
		nombrehombremenor=nombre;
		edadhombremenor=edad;
	}
	if (sexo== "m" && edad < edadhombremenor){
		nombrehombremenor=nombre;
		edadhombremenor=edad;

	}
	}


	document.write("<br>la cantidad de mayores es :"+contadorMayoresDeEdad);
	document.write("<br> la cantidad de menores es: "+contadorMenoresDeEdad);
	document.write("<br> la cantidad de mujeres es: "+cantidadmujeres);
	document.write("<br> la cantidad de hombres es: "+cantidadhombres);
	document.write ("<br> Nombre del mayor "+ nombrehombrmayor);
	document.write("<br> nombre del menor "+nombrehombremenor);
	document.write("<br> nombre del hombre mas chico "+ nombrehombremenor);

}
