// 6. Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.

let c=parseFloat(prompt("ingrese cantidad"));
let d=parseFloat(prompt("ingrese porcentaje requerido"));

function Porcentaje(vp) {
    let valor_porcentaje=(c/100)*d;
    return valor_porcentaje;
}

let valor_porcentaje=parseFloat(Porcentaje(c,d).toFixed(3));
console.log("el porcentaje requerido de la cantidad designada es:",valor_porcentaje);





























    
