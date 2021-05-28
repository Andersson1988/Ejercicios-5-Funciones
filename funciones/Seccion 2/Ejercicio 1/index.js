// 1. Cree un programa que tome la base y la altura de un triángulo e imprima su área. //

let a=parseFloat(prompt("ingrese valor de altura"));
let b=parseFloat(prompt("ingrese valor de base"));

function area(a,b) {
    let triangulo=(a*b)/2;
    return triangulo;
}

let areaTriangulo=parseFloat(area(a,b).toFixed(3));
console.log("El area de el triangulo propuesto es:",areaTriangulo);












































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