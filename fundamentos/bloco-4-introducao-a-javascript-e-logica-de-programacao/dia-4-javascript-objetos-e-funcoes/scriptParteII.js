//EXERCICIO 1  AINDA FALTA SEGUNDA PALAVRA 

/* let palavra = "arara";


function palindromoverify(palavra) {
  //console.log(palavra.split("").reverse().join("")); APENAS PARA VERIFICAR SE ESTA OPERANDO CORRETAMENTE
        if (palavra.split("").reverse().join("") === palavra) { 
            return true;
        } else {
             return false;
        } 
}
console.log(palindromoverify(palavra)) */

//EXERCICIO 2

let numeros = [2, 3, 6, 7, 10, 1];

  function maiorNumero (numeros) {
      let maiorNumero = 0;
      let indiceArray = 0;
    for (index = 0; index < numeros.length; index += 1) {
         if(maiorNumero < numeros[index]) {
            maiorNumero = numeros[index];
            indiceArray = index;
      }
    } 
    return indiceArray;
  }