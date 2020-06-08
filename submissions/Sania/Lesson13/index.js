const color = [
  '#FFB6C1',
  '#9ACD32',
  '#AFEEEE',
  '#FFFF00',
  '#8B0000',
  '#DC143C',
  '#FFA07A',
  '#E9967A',
  '#00FF00',
  '#20B2AA',
];

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

let intervalValue;

const createBackground = () => {
  document.querySelector('.interval__block').style.backgroundColor =
    color[randomInteger(1, 10)];
};

// eslint-disable-next-line no-unused-vars
const startInterval = () => {
  intervalValue = setInterval(
    createBackground,
    document.querySelector('.interval__input--interval').value,
  );
};

const stopInterval = () => {
  clearInterval(intervalValue);
};

// eslint-disable-next-line no-unused-vars
const stopIntervalWithTimeout = () => {
  setTimeout(
    stopInterval,
    document.querySelector('.interval__input--timeout').value,
  );
};

const dateBlock = document.querySelector('.data__res');

// eslint-disable-next-line no-unused-vars
const onClickDate = () => {
  const date = new Date();
  dateBlock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

// eslint-disable-next-line no-unused-vars
const onClickDateLa = () => {
  let options = {
    timeZone: 'America/Los_Angeles',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  dateBlock.innerHTML = new Date().toLocaleString('ru-RU', options);
};

// eslint-disable-next-line no-unused-vars
const onClickSydney = () => {
  let options = {
    timeZone: 'Australia/Sydney',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  dateBlock.innerHTML = new Date().toLocaleString('ru-RU', options);
};
