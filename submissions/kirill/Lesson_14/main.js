const intervalInput = document.querySelector('.interval__input');
const startInterval = document.querySelector('.interval__button');
const stopInterval = document.querySelector('.interval__button--stop');
const div_color = document.querySelector('.block__box--change-color');
const timeoutInput = document.querySelector('.timeout__input');
const startTimeout = document.querySelector('.timeout__button');

let intervalData = {};

// rgb func
function selectColor() {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);

  div_color.style.backgroundColor = 'rgb(' + [a, b, c].join(',') + ')';
}

// Work with Interval
startInterval.addEventListener('click', function () {
  let interval = setInterval(function () {
    selectColor();
  }, intervalInput.value);

  stopInterval.addEventListener('click', function () {
    clearInterval(interval);
  });

  intervalData.id = interval;
});

// Work with Timeout
startTimeout.addEventListener('click', function () {
  setTimeout(function () {
    clearInterval(intervalData.id);
  }, timeoutInput.value);
});

// Work with Date On Page
const firstVisit = new Date().getTime();
let pageBtn = document.querySelector('.page__button');
let pageOutput = document.querySelector('.page__output');

pageBtn.addEventListener('click', function checkTime() {
  let visitingTime = new Date().getTime() - firstVisit;
  pageOutput.textContent = msToTime(visitingTime);
});

function msToTime(millis) {
  let seconds = parseInt((millis / 1000) % 60),
    minutes = parseInt((millis / (1000 * 60)) % 60),
    hours = parseInt((millis / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds;
}

// Work with LA Time

const LA_Btn = document.querySelector('.LA__button');
const LA_Output = document.querySelector('.LA__output');

LA_Btn.addEventListener('click', function () {
  timeInLA();
});

function timeInLA() {
  let options = {
    timeZone: 'America/Los_Angeles',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  LA_Output.textContent = new Date().toLocaleDateString('ru-RU', options);
}

const sidneyBtn = document.querySelector('.sidney__button');
const sidneyOutput = document.querySelector('.sidney__output');

sidneyBtn.addEventListener('click', function () {
  timeInSidney();
});

function timeInSidney() {
  let options = {
    timeZone: 'Australia/Sydney',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  sidneyOutput.textContent = new Date().toLocaleDateString('ru-RU', options);
}
