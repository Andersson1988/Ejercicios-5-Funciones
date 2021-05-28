// 1. Cree un programa que tome el valor de un productro y le sume su IVA //
let a=parseFloat(prompt("ingrese valor producto"));

function Precio_final(a,b=0.19) {
    let precio_final_producto=(a*b)+a;
    return precio_final_producto;
}

let p_final=Precio_final(a); // no se le puede poner la variabvle de iva,pero si podemos anexar valora a par acmbiar valor de iva y no toamr el por defecto // 
console.log(p_final);                     


//----------Alternativa------------// dandeo valor a b de 0.50 de esta manera saltando el valor predeterminado asignado //
// let p_final=Precio_final(a,0.50); 
// console.log(p_final);  

