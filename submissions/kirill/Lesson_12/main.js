const maxBtn = document.querySelector('.max__button');
const minBtn = document.querySelector('.min__button');
const averageBtn = document.querySelector('.average__button');

const maxWrapper = document.querySelector('.max');
const minWrapper = document.querySelector('.min');
const averageWrapper = document.querySelector('.average');

let MyArr = {
  __proto__: Array,
};

MyArr.__proto__.max = function (...args) {
  return Math.max.apply(Math, ...args);
};

MyArr.__proto__.min = function (...args) {
  return Math.min.apply(Math, ...args);
};

MyArr.__proto__.average = function (args) {
  return (args.reduce((acc, item) => acc + item) / args.length).toFixed(2);
};

maxBtn.addEventListener('click', function () {
  let numbsArr = document
    .querySelector('.max__input')
    .value.split(',')
    .map((x) => +x);
  const div = document.createElement('div');
  div.textContent = MyArr.max(numbsArr);
  maxWrapper.appendChild(div);
});

minBtn.addEventListener('click', function () {
  let numbsArr = document
    .querySelector('.min__input')
    .value.split(',')
    .map((x) => +x);
  const div = document.createElement('div');
  div.textContent = MyArr.min(numbsArr);
  minWrapper.appendChild(div);
});

averageBtn.addEventListener('click', function () {
  let numbsArr = document
    .querySelector('.average__input')
    .value.split(',')
    .map((x) => +x);
  const div = document.createElement('div');
  div.textContent = MyArr.average(numbsArr);
  console.log(MyArr.average(numbsArr));
  averageWrapper.appendChild(div);
});
