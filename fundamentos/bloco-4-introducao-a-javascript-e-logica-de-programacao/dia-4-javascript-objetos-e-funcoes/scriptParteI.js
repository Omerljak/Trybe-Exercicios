let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "sim", 
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
  
info[recorrente] = "sim",  //insere nova propriedade ou sobrescreve existente de mesmo nome//
for ( let index in info) {
  console.log(index);
}*/
/*
//EXERCICIO 4  ok

for ( let index in info) {
  console.log(info[index]);
} */

//Exercicio 5 ok

for ( let index in info && plus) {
  if (info[index] === "sim" && plus[index] === "sim") {
    console.log("Ambos são recorrentes");
  } else {
    console.log(info[index] + " e " + plus[index]);
}
}
