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
  
  // Exercicio 1
  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.querySelector('#days');
  
    for (let index = 0; index < dezDaysList.length; index += 1) {
      const daysMonth = dezDaysList[index];
      const dayMonthList = document.createElement('li');
      dayMonthList.innerHTML = daysMonth;
      monthDaysList.appendChild(dayMonthList);
      dayMonthList.classList.add('day');
  /*if (daysMonth === 24 || daysMonth === 25 || daysMonth === 31) {
      daysMonthList.classList.add('day');
    } 
    if (daysMonth === 4 || daysMonth === 11 || daysMonth === 18 || daysMonth === 25) {
      daysMonthList.classList.add('holiday')
    } */
    };
  };
  
  createDaysOfTheMonth();

  //EXERCICIO 2
  function createButton() {
  let newButton = document.querySelector('.buttons-container');
  let holiButton = document.createElement('button');
    holiButton.innerHTML.id = 'btn-holiday';
    holiButton.innerHTML = 'Feriados';
    newButton.appendChild(holiButton);
  }
    createButton()

 /*  //exercicio 3

function holidaysButtonFunction() {
  let holidaysButton = document.getElementById('btn-holiday');
  holidaysButton.addEventListener('click', holidaysBgColorChanger());
}

function holidaysBgColorChanger() {
  let holidays = document.getElementsByClassName('holiday');
  console.log(holidays);
  for (index = 0; index < holidays.length; index += 1) {
    holidays[index].style.backgroundColor = 'blue';
  }
}

holidaysButtonFunction() */