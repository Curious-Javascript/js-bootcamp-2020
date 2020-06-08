const input = document.querySelector('.section__input');
const answer = document.querySelector('.answer');

class MyArray extends Array {
  constructor(value) {
    super(value);
    this.value = value;
  }

  min() {
    return Math.min.call(this, ...this.value);
  }

  max() {
    return Math.max.call(this, ...this.value);
  }

  average() {
    return this.value.reduce((acc, item) => acc + item) / this.value.length;
  }
}

function valsToArr(input) {
  return input.split(',').map((item) => +item);
}

document
  .querySelector('.section__button--min')
  .addEventListener('click', function () {
    let instance = new MyArray(valsToArr(input.value));
    answer.textContent = instance.min();
  });

document
  .querySelector('.section__button--max')
  .addEventListener('click', function () {
    let instance = new MyArray(valsToArr(input.value));
    answer.textContent = instance.max();
  });

document
  .querySelector('.section__button--average')
  .addEventListener('click', function () {
    let instance = new MyArray(valsToArr(input.value));
    answer.textContent = instance.average();
  });
