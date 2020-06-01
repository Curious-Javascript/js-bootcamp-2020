let arrSample = [1, -4, 7, 12];

const positiveSum = (arr) => {
    let result = 0;
    sum (arr);
  function sum (arr) {
        if (arr.length === 0)
            return result;
        if (arr[0] >= 0) {
            result += arr.shift();
            return sum(arr);
        } else if (arr[0] < 0) {
            arr.shift();
            return sum(arr);
        }

    }

    return result;
}


    console.log(positiveSum(arrSample))
