// 3. Cree un programa que lea un número y muestre si este  es divisible entre cinco o no. Realice una versión con condicionales y otra con estructura switch-case.

let a=parseFloat(prompt("ingrese numero para saber si es divisible por 5"));

function Divisible5(a) {
    if(a%5==0){
        let mensaje="este numero es divisible por 5";
        return mensaje;
    }

    if(a%5!=0){
        let mensaje="este numero no es divisible por 5";
        return mensaje;
    }    
}

let numero_divisible5=Divisible5(a);
console.log(numero_divisible5);




























































/* 4. Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%.
5. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10%.
6. Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.
7. Cree un programa que tome un número real e imprima su valor absoluto. */
/*
SECCIÓN 4
1. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.
2. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales y otra con estructura switch-case.
3. Cree un programa que lea un número y muestre si este  es divisible entre cinco o no. Realice una versión con condicionales y otra con estructura switch-case.
4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con condicionales y otra con estructura switch-case. */
