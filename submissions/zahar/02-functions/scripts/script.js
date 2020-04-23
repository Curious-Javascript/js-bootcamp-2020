function paperwork (n, m) {
    if (n <= 0 || m <= 0) {
        return 0;
    }
    return (n * m);
}

console.log(paperwork(5, 5));

function check (a, x) {
    return a.includes(x);
}

console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 80));

function arrayPlusArray (arr1, arr2) {
    var counter = 0;
    for (var i = 0; i < arr1.length; i++) {
        counter += arr1[i];
    }
    for (var j = 0; j < arr2.length; j++) {
        counter += arr2[j];
    }
    return counter;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
