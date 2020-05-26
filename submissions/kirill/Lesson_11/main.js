const combineBtn = document.querySelector('.combine-array__btn');
const everyBtn = document.querySelector('.every__btn');
const someBtn = document.querySelector('.some__btn');

const combineAnswer = document.querySelector('.combine-array--answer');
const everyAnswer = document.querySelector('.every--answer');
const someAnswer = document.querySelector('.some--answer');

combineBtn.addEventListener('click', function () {
  let arrays = [[1, 2, 3], [4, 5], [6]];
  let div = document.createElement('div');
  div.textContent = arrays.reduce((acc, item) => acc.concat(item)).toString();
  combineAnswer.appendChild(div);
  combineBtn.setAttribute('disabled', 'disabled');
});

everyBtn.addEventListener('click', function () {
  let firstDiv = document.createElement('div');
  let secondDiv = document.createElement('div');
  firstDiv.textContent = every([NaN, NaN, NaN], isNaN).toString();
  secondDiv.textContent = every([NaN, NaN, 4], isNaN).toString();
  everyAnswer.appendChild(firstDiv);
  everyAnswer.appendChild(secondDiv);
  everyBtn.setAttribute('disabled', 'disabled');
});

someBtn.addEventListener('click', function () {
  let firstDiv = document.createElement('div');
  let secondDiv = document.createElement('div');
  firstDiv.textContent = some([NaN, 3, 4], isNaN).toString();
  secondDiv.textContent = some([2, 3, 4], isNaN).toString();
  someAnswer.appendChild(firstDiv);
  someAnswer.appendChild(secondDiv);
  someBtn.setAttribute('disabled', 'disabled');
});

function every(arr, condition) {
  for (let item in arr) {
    if (!condition(arr[item])) {
      return false;
    }
  }
  return true;
}

function some(arr, condition) {
  for (let item in arr) {
    if (condition(arr[item])) {
      return true;
    }
  }
  return false;
}
