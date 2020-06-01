let arr = [1, 2, 3, 4, 5, 6];

const nonConsecutive = (ar) => {
    let otvet = null;
    for (let i = 0; i < ar.length-1; i++) {
        if (ar[i] + 1 !== ar[i + 1]) {
            return otvet = [ar[i + 1], '[' + `${i + 1}` + ']'];
        }
    }
    return otvet;
}
console.log(nonConsecutive(arr));

