/* eslint-disable no-unused-vars */

//
// let MyArray = { };
let inputStr = document.getElementById('inputArrayid');

const maxMinAvg = function (str, fun) {
  let arr = str.split(', ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  let rslt = arr.reduce((a, b) => a + b, 0) / arr.length || 0;

  if (fun === 2) {
    rslt = Math.min(...arr);
  }
  if (fun === 1) {
    rslt = Math.max(...arr);
  }
  return (document.getElementById('result').innerHTML = `${rslt}`);
};

//
// const min = function (arr) {
//
//   Math.min
//   let rslt = 0;
//   return (document.getElementById('result').innerHTML = `${rslt}`);
//
// };
//   arr.substr(1, arr.length - 1);
//   let array = arr.split('], [');
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i].split(', ');
//   }
//   let arrAll = array.reduce(function (sum, current) {
//     return sum.concat(current);
//   });
//   return (document.getElementById('result').innerHTML = `${arrAll}`);
// };
// const arrEvery1 = [NaN, NaN, NaN];
// const arrEvery2 = [NaN, NaN, 4];
// const arrSome1 = [NaN, 3, 4];
// const arrSome2 = [2, 3, 4];
// const every = (arr, arg) => {
//   const every = (arr, arg, th) => {
//     th.disabled = true;
//     return (document.getElementById('resultEvery').innerHTML = arr.every(arg));
//   };
//   const some = (arr, arg) => {
//     const some = (arr, arg, th) => {
//       th.disabled = true;
//       return (document.getElementById('resultSome').innerHTML = arr.some(arg));
// const max = function (arr) {
//
//
//
//
//   let rslt = 0;
//   return (document.getElementById('result').innerHTML = `${rslt}`);
//
// };
