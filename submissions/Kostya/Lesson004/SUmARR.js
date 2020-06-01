let arr1 = [1, 1, 1, 1, 1, 1, 1, 1];
let arr2 = [2, 1, 1, 12, 1, 1, 1, 1, 2];
let summ = function (arra) {
    var x = 0;
    for (let i=0; i<arra.length; i++)
    {
        x += arra[i];
    }
    return x;
}
    console.log(summ(arr1) + summ(arr2));