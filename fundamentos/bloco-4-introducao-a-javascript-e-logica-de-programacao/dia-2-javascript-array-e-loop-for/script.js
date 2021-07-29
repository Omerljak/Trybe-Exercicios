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

let soma = 0;
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
    