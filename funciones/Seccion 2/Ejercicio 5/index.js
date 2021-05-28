//5. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10%.


let vp=parseFloat(prompt("ingrese valor del producto"));

const DESCUENTO=0.10;
function PrecioFinal(vp) {
    let precio_producto_menos_descuento=vp-(vp*DESCUENTO);
    return precio_producto_menos_descuento;
}

let valor_total=parseFloat(PrecioFinal(vp).toFixed(3));
console.log("este es el valor del producto - Descuento:",valor_total);
























