/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;
 edad=parseInt(edad);
 var sexo;
 var contador;
 contador=0;
 var estadocivil;
 estadocivil=parseInt(estadocivil);
 var sueldobruto;
 sueldobruto=parseInt(sueldobruto);
 var numerodelegajo;
 numerodelegajo=parseInt(numerodelegajo);
 var nacionalidad;

while (contador<1){
    contador++;
    edad=prompt("ingrese edad");
    sexo=prompt ("ingrese sexo");
    estadocivil=prompt("ingrese estado civil");
    sueldobruto=prompt("igrese sueldo bruto");
    numerodelegajo=prompt("ingrese numeroe de legajo");
    nacionalidad=prompt("ingrese nacionalidad");

    if (edad>18 && edad<90){
        document.getElementById("Edad").value=edad;
    }
    if (sexo=="m" || sexo=="f"){
        switch(sexo){
            case ("m"):
            sexo="masculino";
            break;
           default:
                sexo="femenino";
                break;
        }
        document.getElementById("Sexo").value=sexo;
    }
    if(estadocivil=="1" || estadocivil=="2" || estadocivil=="3" || estadocivil=="4"){
        switch(estadocivil){
            case("1"):
            estadocivil="Soltero";
            break;
            case ("2"):
            estadocivil="Casado";
            break;
            case ("3"):
            estadocivil="Divorciado";
            break;
            default:
                estadocivil="Viudo";
                break;

    }
    document.getElementById("EstadoCivil").value=estadocivil;
}
if(sueldobruto>8000){
    document.getElementById("Sueldo").value=sueldobruto;
}else{
    while(sueldobruto<8000){
    sueldobruto=prompt("ingrese sueldo bruto correcto");
    document.getElementById("Sueldo").value=sueldobruto;
}
  if(nacionalidad=="a" || nacionalidad=="e" || nacionalidad=="n"){
      switch(nacionalidad){
          case ("a"):
          nacionalidad="Argentina";
          break;
          case ("e"):
          nacionalidad="Extranjero";
          break;
          default:
          nacionalidad="Nacionalizados"
          break;}
          document.getElementById("Nacionalidad").value=nacionalidad;
          }
          }
      }
  }


    



