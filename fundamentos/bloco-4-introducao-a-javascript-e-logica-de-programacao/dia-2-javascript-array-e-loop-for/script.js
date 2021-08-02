let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1
//for (let number of numbers) {
//    console.log(number);
//}
//resultado = 
5
9
3
19
70
8
100
2
35
27 //

//Exercicio 2

/*let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma = (soma + numbers[index]);
} 
    console.log(soma);*/

    // resultado 278

//Exercicio 3

/*let soma = 0;
let media = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma = (soma + numbers[index]);
    media = (soma / numbers.length);
} 
    console.log(media);

    resultado = 27.8*/

//Exercicio 4

/*let soma = 0;
let media = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma = (soma + numbers[index]);
    media = (soma / numbers.length);
} 
if (media > 20 ) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}
    resultadp "valor maior que 20"*/

/*//Exercicio 5 DUVIDA PQ RESULTADO "5"

let maiorNumero = numbers[0];
for (let index = 1; index < numbers.legth; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);*/


//Exercicio 6 //   RESULTADO 6 NUMEROS IMPARES

/*let resultado = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {  //pq !==
        resultado += 1; //qual razâo/significado
      }    
    } 
if (resultado === 0) {  //pq === e não apenas =
    console.log("nenhum valor impar");
} else {
    console.log(resultado);
}*/
    
    

//Exercicio 7 // DUVIDA resultado "5" porque

/*let menorNumero = numbers[0];

for (let index = 1; index < numbers.legth; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
}
console.log(menorNumero);*/

/*/Exercicio 8  //com ajuda do Gabarito//


    let numbersNew = [];

for (let index = 1; index <= 25; index += 1) {
  numbersNew.push(index);
}

console.log(numbersNew);*/


//Exercicio 9


for (let index = 1; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
}

/*RESULTADO 
4.5
1.5
9.5
35
4
50
1
17.5
13.5*/