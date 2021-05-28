//1. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.

let a=parseFloat(prompt("ingrese valor de angulo a"));
let b=parseFloat(prompt("ingrese valor de angulo b"));
let c=parseFloat(prompt("ingrese valor de angulo c"));

function ComprobarAngulos(a,b,c) {
    if(a+b+c==180){
        let mensaje="este es un triangulo, la suma de sus angulos da como resultado 180 grados";
        return mensaje;
    }

    if(a+b+c!=180){
        let mensaje="este no es un triangulo, la suma de sus angulos no da como resultado 180 grados";
        return mensaje;
    }    
}

let angulos_internos=ComprobarAngulos(a,b,c);
console.log(angulos_internos);
































































/* Programe un procedimiento que no reciba parámetros, sume los números 
enteros 12 y 23, e imprima el resultado de la suma de estos dos números. 
Haga las respectivas versiones para pseudocódigo y código. 

function suma() {
    let suma_sin_parametros=12+23;
    return suma_sin_parametros;
}

let valor=suma();
console.log("funcion:",valor);
*/