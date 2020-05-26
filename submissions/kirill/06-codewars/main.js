/* eslint-disable no-unused-vars */
// sum of range
function range(a, b, step = 1) {
  let arr = [];
  for (let i = a; i <= b; i += step) {
    arr.push(i);
  }
  return arr;
}

function sum(arr) {
  return arr.reduce((acc, val) => acc + val);
}

// END sum of range

// reverseArray
function reverseArrayInPlace(arr) {
  let tmp;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
  }
  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
// END reverseArray

// obj
function arrayToList(arr) {
  let arrFirstVal = arr.shift();
  if (arrFirstVal === undefined) {
    return null;
  }
  return {
    value: arrFirstVal,
    rest: arrayToList(arr),
  };
}

console.log(arrayToList([10, 20]));

function listToArray(obj) {
  let array = [];
  let i = obj;

  while (i) {
    array.push(i.value);
    i = i.rest;
  }
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));

// END obj

// deepEqual
function deepEqual(a, b) {
  if (typeof a === typeof b) {
    for (let i in a) {
      if (
        Object.prototype.hasOwnProperty.call(a, i) &&
        Object.prototype.hasOwnProperty.call(b, i)
      ) {
        return deepEqual(a[i], b[i]);
      }
    }
  }
  return false;
}

// End deepEqual

// telegram task 1
function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter(), counter(), counter());
// console.log(makeCounter()(),makeCounter()(),makeCounter()());

// END telegram task 1

// telegram task 2
function randomWalk() {
  let my_array = [];
  return function () {
    let numb = Math.round(Math.random() * 100);
    if (my_array.includes(numb)) {
      while (my_array.includes(numb)) {
        numb = Math.round(Math.random() * 100);
      }
    }
    my_array.push(numb);
    return my_array;
  };
}

let random = randomWalk();
console.log(random());
console.log(random());
// END telegram task 2
