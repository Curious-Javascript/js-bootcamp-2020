let methodArray = [];
document.querySelector('.calculations__input').onblur = function (evt) {
  methodArray = new Arr(...evt.target.value.split(',').map(Number));
};

class Arr extends Array {
  maxNumber() {
    return Math.max(...this);
  }

  minNumber() {
    return Math.min(...this);
  }

  average() {
    return (
      this.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      ) / this.length
    );
  }
}

const onClickMaxNumber = () => {
  document.querySelector(
    '.calculations__answer',
  ).innerHTML = methodArray.maxNumber();
};

const onClickMinNumber = () => {
  document.querySelector(
    '.calculations__answer',
  ).innerHTML = methodArray.minNumber();
};

const onClickAverager = () => {
  document.querySelector(
    '.calculations__answer',
  ).innerHTML = methodArray.average();
};
