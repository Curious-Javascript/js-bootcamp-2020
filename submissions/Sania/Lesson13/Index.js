let methodArray = [];
document.querySelector('.calculations__input').onblur = function (evt) {
  methodArray = new Arr2(evt.target.value.split(',').map(Number));
};

class Arr extends Array {
  constructor(value) {
    super(value);
    this.value = value;
  }
  maxNumber() {
    return Math.max.call(this, ...this.value);
  }
  minNumber() {
    return Math.min.call(this, ...this.value);
  }
}

class Arr2 extends Arr {
  constructor(value) {
    super(value);
  }

  average() {
    return (
      this.value.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      ) / this.value.length
    );
  }
}

// eslint-disable-next-line no-unused-vars
const onClickMaxNumber = () => {
  document.querySelector(
    '.calculations__answer',
  ).innerHTML = methodArray.maxNumber();
};

// eslint-disable-next-line no-unused-vars
const onClickMinNumber = () => {
  document.querySelector(
    '.calculations__answer',
  ).innerHTML = methodArray.minNumber();
};

// eslint-disable-next-line no-unused-vars
const onClickAverager = () => {
  document.querySelector(
    '.calculations__answer',
  ).innerHTML = methodArray.average();
};
