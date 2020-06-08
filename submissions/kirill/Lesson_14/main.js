const input = document.querySelector('.interval__input');
const startInterval = document.querySelector('.interval__button');
const stopInterval = document.querySelector('.interval__button--stop');
const div_color = document.querySelector('.interval__block--change-color');

startInterval.addEventListener('click', function () {
  let interval = setInterval(function () {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    div_color.style.backgroundColor = 'rgb(' + [a, b, c].join(',') + ')';
  }, input.value);

  stopInterval.addEventListener('click', function () {
    clearInterval(interval);
  });
});

// Work with Date
const firstVisit = new Date().getTime();
let dateBtn = document.querySelector('.date__button');
let output = document.querySelector('.date__output');

dateBtn.addEventListener('click', function () {
  let visitingTime = new Date().getTime() - firstVisit;
  output.textContent = visitingTime.toString() + 'm/s';
});
