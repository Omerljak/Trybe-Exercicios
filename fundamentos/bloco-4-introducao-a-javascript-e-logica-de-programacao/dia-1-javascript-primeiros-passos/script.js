//EXERCICIO 1

let a = 44;
let b = 27;
let c = 107;

//Adição 
    if (a + b) {
        console.log(a + b);
    }
//Subtração
    if (a - b) {
        console.log(a - b);
    }
//Multiplicação
    if (a * b) {
        console.log(a / b);
    }
//Módulo
    if (a % b) {
        console.log(a % b);
    }

//Exercicio 2

    if (a > b) {
     console.log("A é maior que B");
 } else {
     console.log("B é maior que A");
 }

 //Exercicio 3

    if (a > b && a > c) {
        console.log("A é o maior");
    } else if (b > c) {
        console.log("B é o maior");
    } else {
        console.log("C é o maior");
    }


//Exercicio 4

    if (a > 0) {
        console.log("Positive");
    } else if (a < 0) {
        console.log("Negative");
    } else {
        console.log("ZERO");
    }

//Exercicio 5 (Duvidas)

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;


if (angulo1 + angulo2 + angulo3 == 180) {
    console.log("true");
} else {
    console.log("false");
}
if (angulo1 && angulo2 && angulo3 >= 0) {
    console.log("angulos validos");
} else {
    console.log("Não form Triangulo");
}

//Exercicio 6

//Exercicio 7

let nota = 45;

if (nota > 100) {
    console.log("Nota Invalida");
} else if (nota >= 90) {
    console.log("A");
} else if (nota >= 80 && nota < 90) {
    console.log("B");
} else if (nota >= 70 && nota < 80) {
    console.log("C");
} else if (nota >= 60 && nota < 70) {
    console.log("D");
} else if (nota >= 50 && nota < 60) {
    console.log("E");
} else if (nota <= 50) {
    console.log("F");
} 

//Exercicio 8

if (a || b || c % 2 == 0) {
    console.log("true");
} else {
    console.log("false");
}

//Exercicio 9

if (a || b || c % 2 == 1) {
    console.log("true");
} else {
    console.log("false");
}
