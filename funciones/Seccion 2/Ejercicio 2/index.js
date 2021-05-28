// 2. Cree un programa que tome el radio de un círculo e imprima su área y perímetro.

let r=parseFloat(prompt("ingrese valor de radio"));

const PI=parseFloat(3.1415926535);

function area(r) {
    let area_de_circulo=PI*Math.pow(r,2);
    return area_de_circulo;
}


let area1=parseFloat(area(r).toFixed(3));
console.log("esta es el area del circulo:",area1);


function perimetro(params) {
    let perimetro_de_circulo=r*PI;
    return perimetro_de_circulo;  
}

let perimetro1=parseFloat(perimetro(r).toFixed(3));
console.log("este es el perimetro del circulo:",perimetro1);


























    
