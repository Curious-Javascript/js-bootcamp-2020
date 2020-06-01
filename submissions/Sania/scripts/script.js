// leson2
const fun = (a, b) => {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return 'значение ровно';
  }
};

console.log(fun(10, 10));

const fun1 = (n) => {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    return fun1(-n);
  } else {
    return fun1(n - 2);
  }
};

console.log(fun1(50));

const fun2 = (text, symbol) => {
  let counter = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] === symbol) {
      counter += 1;
    }
  }
  return counter;
};

console.log(fun2('assssss', 's'));

const fun3 = (numb) => {
  const count = numb + '';
  var sum = 0;
  for (var i = 0; i < count.length; i++) {
    if (count[i] % 2 === 0) {
      sum += +count[i];
    }
  }
  return sum;
};
console.log(fun3(123456));

// lesson3
const paperwork = (n, m) => {
  if (n <= 0 || m <= 0) {
    return 0;
  }
  return n * m;
};

console.log(paperwork(5, 5));

const check = (a, x) => {
  return a.includes(x);
};

console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 80));

const arrayPlusArray = (arr1, arr2) => {
  const arr3 = arr1.concat(arr2);
  var counter = 0;
  for (var i = 0; i < arr3.length; i++) {
    counter += arr3[i];
  }
  return counter;
};

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

const points = (games) => {
  var count = 0;
  for (var i = 0; i < games.length; i++) {
    var compare = games[i].split(':');
    if (compare[0] > compare[1]) {
      count += 3;
    } else if (compare[0] < compare[1]) {
      count += 0;
    } else {
      count += 1;
    }
  }
  return count;
};
console.log(
  points([
    '1:0',
    '2:0',
    '3:0',
    '4:0',
    '2:1',
    '1:3',
    '1:4',
    '2:3',
    '2:4',
    '3:4',
  ]),
);

// lesson4

const getPlanetName = (id) => {
  var name;
  switch (id) {
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
  }

  return name;
};

console.log(getPlanetName(2));

const abbrevName = (name) => {
  const getArray = name.split(' ');
  const getInitials =
    getArray[0].substr(0, 1).toUpperCase() +
    '.' +
    getArray[1].substr(0, 1).toUpperCase();

  return getInitials;
};

console.log(abbrevName('Sam Harris'));
