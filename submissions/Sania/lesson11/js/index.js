/* eslint-disable no-unused-vars */
const combineArray = (arr) => {
  document.getElementsByClassName(
    'combine-array--answer',
  )[0].innerHTML = arr.reduce(
    (newArray, current) => newArray.concat(current),
    [],
  );
};

function every(array, condition) {
  const answer = document.getElementsByClassName('every--answer')[0];
  for (const item of array) {
    if (!condition(item)) {
      answer.innerHTML = 'false';
    }
  }
  answer.innerHTML = 'true';
}
function some(array, condition) {
  const answer = document.getElementsByClassName('some--answer')[0];
  for (const item of array) {
    if (condition(item)) {
      answer.innerHTML = 'true';
    }
  }
  answer.innerHTML = 'false';
}
