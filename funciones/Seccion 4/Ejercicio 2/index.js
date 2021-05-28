// 2. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales y otra con estructura switch-case.

let a=parseFloat(prompt("ingrese numero para saber si es par o impar"));

function Par(a) {
    if(a%2==0){
        let mensaje="este numero es par";
        return mensaje;
    }

    if(a%2!=0){
        let mensaje="este numero no es par";
        return mensaje;
    }    
}

let numero_par=Par(a);
console.log(numero_par);




































































