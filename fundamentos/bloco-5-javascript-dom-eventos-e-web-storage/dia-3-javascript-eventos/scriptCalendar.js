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
  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.querySelector('#days');
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
      const daysMonth = dezDaysList[index]; // onde estão os dias
      const dayMonthList = document.createElement('li'); // onde criou-se as li
     /*  dayMonthList.innerHTML = daysMonth;
      monthDaysList.appendChild(dayMonthList);
      dayMonthList.className = 'day'; */
      //bloco transferido para dentro dos if's, assim fica mais simples a distribuição
  if (daysMonth === 24 || daysMonth === 31) {
      daysMonth.className = ' day holiday';
      dayMonthList.innerHTML = daysMonth;
      monthDaysList.appendChild(dayMonthList);
    } else if (daysMonth === 4 || daysMonth === 11 || daysMonth === 18) {
      daysMonth.className = 'day friday';
      dayMonthList.innerHTML = daysMonth;
      monthDaysList.appendChild(dayMonthList);
    } else if (daysMonth === 25) {
      daysMonth.className = 'day holiday, friday';
      dayMonthList.innerHTML = daysMonth;
      monthDaysList.appendChild(dayMonthList);
    } else {
      daysMonth.className = 'day';
      dayMonthList.innerHTML = daysMonth;
      monthDaysList.appendChild(dayMonthList);
    }
    }
    }
    
  
  createDaysOfTheMonth();
  
  //EXERCICIO 2 OK
  function createButton() {
    let newButton = document.querySelector('.buttons-container');
    let holiButton = document.createElement('button');
     holiButton.id = 'btn-holiday';
     holiButton.innerHTML = 'Feriados';
     newButton.appendChild(holiButton);
  }
    createButton()

  //exercicio 3
//

  //EXERCICIO 4 OK
function createButtonFriday() {
  let fridayButton = document.querySelector('.buttons-container');
  let buttonFriday = document.createElement('button');
    buttonFriday.id = 'btn-friday';
    buttonFriday.innerHTML = 'Sexta-Feira';
    fridayButton.appendChild(buttonFriday);
  }
    createButtonFriday()

    //EXERCICIO 5

let clicButton = document.getElementById('btn-friday');
    clicButton.addEventListener("click" ,onclick());
function onclick() {
  let mudaSexta = document.getElementById('friday');
  mudaSexta = 'sextou';
}