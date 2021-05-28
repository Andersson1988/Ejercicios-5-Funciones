// 4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con condicionales y otra con estructura switch-case.


let valor=parseInt(prompt("ingrese numero entre 1 y 15 para saber si es primo"));

function Primo(valor) {
    if(valor==1){
        let mensaje="el numero 1 no es considerado ni primo ni compuesto";
        return mensaje;
      }
    if(valor==2 || valor==3 || valor==5 || valor==7 || valor==11 || valor==13){
        let mensaje="este numero es primo";
        return mensaje;
    }
    if(valor==4 || valor==6 || valor==8 || valor==9 || valor==10 || valor==14 || valor==15){
        let mensaje="este numero no es primo";
        return mensaje;
    } 
}

let es_primo=Primo(valor);
console.log(es_primo);
























/*
function Primo(valor) {
    switch (valor){
        case 1:
            let mensaje="El numero 1 no es considerado ni primo ni compuesto";
            break;
   
        case 2:
            let mensaje2="Este numero es primo";
            break;
   
        case 3:
            let mensaje3="Este numero es primo";
            break;
   
        case 4:
            let mensaje4="Este numero no es primo";
            break;
   
        case 5:
            let mensaje5="Este numero es primo";
            break;
   
        case 6:
           let mensaje6="Este numero no es primo";
            break;
   
        case 7:
            let mensaje7="Este numero es primo";
            break;
   
        case 8:
            let mensaje8="Este numero no es primo";
            break;
   
        case 9:
            let mensaje9="Este numero no es primo";
            break;
   
        case 10:
            let mensaje10="Este numero no es primo";
            break;
   
        case 11:
            let mensaje11="Este numero es primo";
            break;
   
        case 12:
            let mensaje12="Este numero no es primo";
            break;
   
        case 13:
            let mensaje13="Este numero es primo";
            break;
   
        case 14:
            let mensaje14="Este numero no es primo";
            break;
   
        case 15:
            let mensaje15="Este numero no es primo";
            break;
    
        default:
            let mensajef="Dato no aceptado por favor de nuevo ingrese un numero entero entre 1 y 15";
            break;
    } 
}

let es_primo=Primo(valor);
console.log(es_primo);  
   
*/























