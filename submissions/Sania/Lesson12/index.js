document.querySelector('.calculations__input').onblur = function (evt) {
  MyArray.value = evt.target.value.split(',').map(Number);
};

let MyArray = {
  value: [],

  get average() {
    return (
      this.value.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      ) / this.value.length
    );
  },

  get minNumber() {
    return Math.min(...this.value);
  },

  get maxNumber() {
    return Math.max(...this.value);
  },
};

MyArray.__proto__ = Array;

const onClickMaxNumber = () => {
  document.querySelector('.calculations__answer').innerHTML = MyArray.maxNumber;
};

const onClickMinNumber = () => {
  document.querySelector('.calculations__answer').innerHTML = MyArray.minNumber;
};

const onClickAverager = () => {
  document.querySelector('.calculations__answer').innerHTML = MyArray.average;
};
