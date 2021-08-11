document.getElementsByTagName('p')[0].innerHTML = 'Na Trybe você aprende o que o Mundo quer!';
document.getElementsByTagName('p')[1].innerHTML = 'Parece que foi ontem que nem sonhava que era possivel ser um DEV!';
document.getElementsByTagName('p')[2].innerHTML = 'Trybe exige muito, mas só o necessário'

document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
document.getElementsByClassName('title')[0].innerHTML = 'Exercício 5.1 - JavaScript';

function psMaiusculo() {
  let listaPs = document.getElementsByTagName('p')
  for (let i = 0; i < listaPs.length; i += 1) {
   listaPs[i].innerHTML = listaPs[i].innerHTML.toUpperCase();
  }
}
psMaiusculo();
console.log(listaPs[i].innerHTML);
/*function paragrafos() { // não resolvido
let paragraph = document.getElementsByTagName('p');
  for (let i = 0; i < paragraph.length; i =+ 1) {
  paragraph = paragraph[i];
 } */

        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */