//7. Cree un programa que tome un número real e imprima su valor absoluto. 

let a=parseFloat(prompt("ingrese un numero real ya sea negativo o positivo para dar su valor absoluto"));

function ValorAbsoluto(a) {
    let Absoluto=Math.abs(a);
    return Absoluto;
}

let valor_absoluto=parseFloat(ValorAbsoluto(a).toFixed(3));
console.log("el valor absoluto del numero dado es:",valor_absoluto);
  
    






