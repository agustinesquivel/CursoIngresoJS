function mostrar()
{
var numeroingresado;
var numerosanteriores;
var esprimo;
var numerorecorrido;

numeroingresado=prompt("ingrese numero");
numeroingresado=parseInt(numeroingresado);
for(numerorecorrido=numeroingresado;numerorecorrido>1;numerorecorrido--){



esprimo=0;
for (numerosanteriores=2;numerosanteriores< numerorecorrido;numerosanteriores--){

if(numerorecorrido%numerosanteriores==0){
console.log(numerosanteriores);
    break;

}
}
}
if(esprimo==0){
    console.log(numerorecorrido+" es un numero primo");
}/*else{
    console.log(numeroingresado+" no es un numero primo");
}*/





}//FIN DE LA FUNCIÓN