/* eslint-disable no-unused-vars */
const checkPassword = () => {
  var resultActionUser = prompt('Введите логин');
  switch (resultActionUser) {
    case 'Админ':
      let resultActionUser2 = prompt('Введите пароль'); // eslint-disable-line
      if (resultActionUser2 === 'Я главный') {
        document.getElementById('resultPrompt').innerHTML = 'Здравствуйте!';
        break;
      } else {
        document.getElementById('resultPrompt').innerHTML = 'Неверный пароль';
        break;
      }
    case null: {
      document.getElementById('resultPrompt').innerHTML = 'Отменено';
      break;
    }
    default: {
      document.getElementById('resultPrompt').innerHTML = 'Я вас не знаю';
      break;
    }
  }
};

const fibonachi = (n) => {
  let count = 0;
  let fibonacciN = 1;
  let fibonacci0 = 0;
  let fibonacci1 = 1;
  let fibonacci2 = 1;
  if (n < 1) {
    fibonacciN = 0;
  }
  return recurse();
  function recurse() {
    if (count < n - 2) {
      count++;
      fibonacci2 = fibonacci1 + fibonacci0;
      fibonacci0 = fibonacci1;
      fibonacciN = fibonacci2 + fibonacci1;
      fibonacci1 = fibonacci2;
      return recurse();
    }
    return (document.getElementById(
      'fibonacchiOutput',
    ).innerHTML = `${fibonacciN}`);
  }
};
let text = document.getElementById('numberN');

const makeButton = () => {
  const counter = () => {
    let count = 0;
    return function () {
      count++;
      resultClicks.value = `${count}`;
      return div.appendChild(resultClicks);
    };
  };
  let div = document.createElement('div');
  let button = document.createElement('input');
  button.type = 'button';
  button.value = 'Count+';
  button.onclick = counter();
  div.appendChild(button);
  let resultClicks = document.createElement('input');
  resultClicks.type = 'button';
  document.getElementById('addButton').prepend(div);
};
