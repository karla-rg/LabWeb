const calculadora = require('./mate')

const interface = require('readline-sync');

let opcion = " ";

do{
    console.log("\n1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");
    console.log("5. Módulo");
    console.log("6. Salir");
    opcion = interface.question("\nIngresa el número correspondiente a la operación que deseas ejecutar: ");

    if(opcion != "6"){
        const n1 = parseFloat(interface.question("\nIngresa el primer número: "));
        const n2 = parseFloat(interface.question("Ingresa el segundo número: "));

        switch(opcion){
            case "1":
                var resultado = calculadora.suma(n1, n2);
                console.log("\nEl resultado de la operación es: " + resultado);
                break;
            case "2":
                var resultado = calculadora.resta(n1, n2);
                console.log("\nEl resultado de la operación es: " + resultado);
                break;
            case "3":
                var resultado = calculadora.multiplicacion(n1, n2);
                console.log("\nEl resultado de la operación es: " + resultado);
                break;
            case "4":
                var resultado = calculadora.division(n1, n2);
                console.log("\nEl resultado de la operación es: " + resultado);
                break;
            case "5":
                var resultado = calculadora.modulo(n1, n2);
                console.log("\nEl resultado de la operación es: " + resultado);
                break;
            default:
                var mensaje = calculadora.mensaje();
                console.log(mensaje);
        }
    }

}while(opcion != "6");
    

    
