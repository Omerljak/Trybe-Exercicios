/*
//Exemplo 1
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);//assim imprime linha a linha (sem index) imprime tudo por linha//
}


//Exemplo 2
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);//Assim imprime linha a linha com o let referente//
  }

  //Exemplo 3 ******IMPORTANTE******

  let food = ['hamburguer', 'bife', 'acarajé'];

  for (let position in food) {// FOR/IN  imprime a posição dos itens no array//
    console.log(position);
  };
  //resultado: 0, 1, 2;

  let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) { // FOR/OF   imprime o item no array em sua ordem original//
};
  console.log(value);
//resultado: hamburguer, bife, acarajé;
*/
//EXERCICIOS FIXAÇÃO 

/*//EXERCICIO 1

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };
  for (let index in names) {
      console.log( "Olá, " + names[index]"!");
  }
*/
  //Exercicio 2

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }
  for ( let key in car) {
      console.log(car[key]);
  }