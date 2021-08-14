function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  createDaysOfTheWeek();
  
  // Exercicio 1 OK + nâo add 'holiday e friday'
  /* O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira. */
  
  
  function createDaysOfTheMonth() {
    const monthDaysList = document.querySelector('#days');
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let index = 0; index < dezDaysList.length; index += 1) {
      const daysMonth = dezDaysList[index]; // onde estão os dias
      const dayMonthLi = document.createElement('li'); // onde criou-se as li
    
      if (daysMonth === 24 || daysMonth === 31) {
        dayMonthLi.className = 'day holiday';// bloco adiciona className, altera o txto origina e insere na li 
        dayMonthLi.innerHTML = daysMonth; //let que cria li, escreve na let que recebe a lista
        monthDaysList.appendChild(dayMonthLi); //filia dayMonthLi à monthDayList
      } else if (daysMonth === 4 || daysMonth === 11 || daysMonth === 18) {
        dayMonthLi.className = 'day friday';
        dayMonthLi.innerHTML = daysMonth;
        monthDaysList.appendChild(dayMonthLi);
      } else if (daysMonth === 25) {
        dayMonthLi.className = 'day holiday friday';
        dayMonthLi.innerHTML = daysMonth;
        monthDaysList.appendChild(dayMonthLi);
      } else {
        dayMonthLi.className = 'day';
        dayMonthLi.innerHTML = daysMonth;
        monthDaysList.appendChild(dayMonthLi);
      }
    }; 
  }; 
  createDaysOfTheMonth();
  
  //EXERCICIO 2 OK
  /*  Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
    Adicione a este botão a ID "btn-holiday" .
    Adicione este botão como filho/filha da tag <div> com classe "buttons-container" */
  function createButton() {
    let newButton = document.querySelector('.buttons-container');//cria variável, que recebe a classe
    let holiButton = document.createElement('button');//cria variável que recebe aa função criar botão
    holiButton.id = 'btn-holiday';//insere id no elemento
    holiButton.innerHTML = 'Feriados';//insere texto no elemento
    newButton.appendChild(holiButton);//liga a variável que recebe a classe com a variável que cria o botão
  }
    createButton()

  //exercicio 3
/*  Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
    É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
 */
function mudaCorFeriados() {
  let diasDeFeriados = document.getElementsByClassName('holiday');
  for (let feriado of diasDeFeriados) { //o for/of a let torns-se o elemento (não necessita mais usar o index)
  console.log(feriado.style.backgroundColor )
    if (feriado.style.backgroundColor) { //bloco faz a função de inserir e retirar a cor
      feriado.style.backgroundColor = '';
    } else {
      feriado.style.backgroundColor = 'rgb(0, 238, 238)';
    }
  }
}
function addClickBotaoFeriados() {
  let botao = document.getElementById('btn-holiday');
  botao.addEventListener('click', mudaCorFeriados);//a funçãc mudaCorFeriados esta sendo indicada e não ativada por isso não usa()
} 
addClickBotaoFeriados()

  //EXERCICIO 4 OK
  /*  Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

    Adicione a este botão o ID "btn-friday" .
    Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
 */
function createButtonFriday() {
  let fridayButton = document.querySelector('.buttons-container');
  let buttonFriday = document.createElement('button');
    buttonFriday.id = 'btn-friday';
    buttonFriday.innerHTML = 'Sexta-Feira';
    fridayButton.appendChild(buttonFriday);
  }
    createButtonFriday()

    //EXERCICIO 5 ok
    /*  Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

    É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
 */
    function escreveSestou() {
      let diasDeSexta = document.getElementsByClassName('friday');
      for (let index in diasDeSexta) { //o for/of a let torns-se o elemento (não necessita mais usar o index)
       // console.log(diasDeSexta[index].innerText)
        if (diasDeSexta[index].innerText === 'Sextou!') { //bloco faz a função de inserir e retirar a cor
          diasDeSexta[index].innerText = 4 + (index * 7); //(index0 * 7) = 0 + 4 ...index1 * 7=7+4....
        } else {
          diasDeSexta[index].innerText = 'Sextou!';
        }
      }
    }
    function addClickBotaoSexta() {
      let botao = document.getElementById('btn-friday');
      botao.addEventListener('click', escreveSestou);//a funçãc mudaCorFeriados esta sendo indicada e não ativada por isso não usa()
    } 
    addClickBotaoSexta()


//EXERCICIO 6
/*  Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

    Dica - Propriedade: event.target .
 */
function zoonOut(event) {
  let day = event.target //marca o alvo do evento
  day.style.fontSize = '20px'
}

function zoonIn(event) {
  let day = event.target
  day.style.fontSize = '30px'
}

function diaZoomInOut () {
  let diasDoMes = document.getElementsByClassName('day');
  for (let dia of diasDoMes) {
  dia.addEventListener('mouseover', zoonIn);
  dia.addEventListener('mouseout', zoonOut);
  }
}
diaZoomInOut () 

//EXERCICIO 7
/*  Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

    O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
 */
function criaSpan(nomeTarefa) {
  let tarefa = document.getElementsByClassName("my-tasks");
  let criaTarefa = document.createElement('span');
 // let space = document.createElement('br');//cria elemento <br> 
  criaTarefa.innerText = nomeTarefa;
  //criaTarefa.className = 'trf-cozinhar'; 
  //criaTarefa.style.color = "red";
  tarefa[0].appendChild(criaTarefa);
  //tarefa[0].appendChild(space);
}
/* criaSpan('Lavar')
criaSpan('Passar')  */
//EXERCICIO 8
/*  Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

    O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
    O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

    */

    function criaLegenda(color) {
      let myTasks = document.getElementsByClassName("my-tasks");
      let criaDiv = document.createElement('div');
      criaDiv.className = 'task';
      criaDiv.style.backgroundColor = color;
      myTasks[0].appendChild(criaDiv);
      //console.log(myTasks)
    }
    criaSpan('Lavar')
    criaLegenda('red');
    criaSpan('Passar') 
    criaLegenda('green');
//EXERCICIO 9
/*   Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.

    Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/
function alteraClasse(event) {
  let tarefa = event.target
  //tarefa.classList.toggle('selected'); //toggle faz a remoção(se existir)ou adiciona classe(se não exixtir) 
  let tarefaSelecionada = document.getElementsByClassName('selected');
  if (tarefaSelecionada.length > 0) {
    if (tarefa)// falta finalizar comparação se esta selecionado ou não 
    tarefaSelecionada[0].classList.remove('selected')//classList.remove ..remove a classe
  } else {
    tarefa.classList.add('selected');
  }
}

function a() {
  let legendas = document.getElementsByClassName('task');
  for (let legenda of legendas) {
    legenda.addEventListener('click', alteraClasse);
  }

}
a()
//EXERCICIO 10
/*  Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

    Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
 */