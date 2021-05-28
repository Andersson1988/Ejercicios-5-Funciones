/* 2. Cree un programa que que pida al usuario el valor de los angulos internos de un
      triangulo rectangulo teniendo en cuenta que ya tenemos un valor pór defecto de 
      90 grados y determine si corresponden a un triangulo mediante el calculo de sus
      angulos externos */

let a=parseInt(prompt("ingrese valor de angulo"));
let b=parseInt(prompt("ingrese valor de angulo"));

function Externo(a,b,c=90) {
    if(540-(a+b+c)==360){
        let mensaje="este es un triangulo rectangulo ya que la suma de sus angulos externos es:360";
        return mensaje;
    }
    if(540-(a+b+c)!=360){
        let mensaje="este no es un triangulo rectangulo ya que la suma de sus angulos externos no es:360";
        return mensaje;
    }
}

let valor=Externo(a,b);
console.log(valor);


//-------Alternativa-------// designando valor a c de 500 y de esta manera saltando el valor predeterminado asignado //
/* let valor=Externo(a,b,500);
   console.log(valor);
*/
























    
