let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "sim", //exercicio 2
  };
let plus = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}
/*
  //EXERCICIO 1  ok
  for (let index in info) {
  }
  console.log(" Seja bem vinda, " + info.personagem + "!" );*/

  /*
  //EXERCICIO 2 e 3  ok
  
for ( let index in info) {
  console.log(index);
}*/
/*
//EXERCICIO 4  ok

for ( let index in info) {
  console.log(info[index]);
} */

//Exercicio 5

for ( let index in info && plus) {
  console.log(info[index] + " e " + plus[index]);
}