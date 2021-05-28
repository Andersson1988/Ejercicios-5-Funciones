// 4. Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%.

let vp=parseFloat(prompt("ingrese valor del producto"));

const IVA=parseFloat(1.19);

function PrecioFinal(vp) {
    let precio_producto_mas_iva=vp*IVA;
    return precio_producto_mas_iva;
}

let valor_total=parseFloat(PrecioFinal(vp).toFixed(3));
console.log("este es el valor del producto + IVA:",valor_total);































