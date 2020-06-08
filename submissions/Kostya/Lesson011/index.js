/* eslint-disable no-unused-vars */
let inputArray = document.getElementById('inputArrayid');
let arrays = [[1, 2, 3], [4, 5], [6]];
const concatArray = function (arr) {
  arr.substr(1, arr.length - 1);
  let array = arr.split('], [');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split(', ');
  }
  let arrAll = array.reduce(function (sum, current) {
    return sum.concat(current);
  });
  return (document.getElementById('result').innerHTML = `${arrAll}`);
};

const arrEvery1 = [NaN, NaN, NaN];
const arrEvery2 = [NaN, NaN, 4];
const arrSome1 = [NaN, 3, 4];
const arrSome2 = [2, 3, 4];
const every = (arr, arg, th) => {
  th.disabled = true;
  return (document.getElementById('resultEvery').innerHTML = arr.every(arg));
};
const some = (arr, arg, th) => {
  th.disabled = true;
  return (document.getElementById('resultSome').innerHTML = arr.some(arg));
};

// console.log(every([NaN, NaN, NaN], isNaN));
// // → true
// console.log(every([NaN, NaN, 4], isNaN));
// // → false
// console.log(some([NaN, 3, 4], isNaN));
// // → true
// console.log(some([2, 3, 4], isNaN));
// // → false
