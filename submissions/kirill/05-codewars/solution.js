// SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
    return  a.reduce((acc, val) => acc + val**2, 0) > b.reduce((acc, val) => acc + val**3, 0);
}
// END SpeedCode #2 - Array Madness

// Find the Difference in Age between Oldest and Youngest Family Members (Using Spreads)
function differenceInAges(ages){
    let max = Math.max(...ages);
    let min = Math.min(...ages);
    return [min, max, max-min];
}
// END Find the Difference in Age between Oldest and Youngest Family Members

//Find the first non-consecutive number
function firstNonConsecutive (arr) {
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1] - arr[i] !== 1) return arr[i+1];
    }
    return null;
}
// END Find the first non-consecutive number

// Filling an array (part 1)
function arr(N){
    let retArr =[];

    for(let i=0;i<N;i++){
        retArr.push(i);
    }
    return retArr;
}
// END Filling an array (part 1)

// Sum of positive
function positiveSum(arr) {
    let sum =0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>0){
            sum+=arr[i];
        }
    }
    return sum;
}
// END Sum of positive

// Polish alphabet
function correctPolishLetters(string){
    const key = { 'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z' };
    return string.replace(/[ąćęłńóśźż]/g, match => key[match]);
}
// END Polish alphabet

// Asterisk it
function asteriscIt(n) {
    if(Array.isArray(n)){
        n = n.toString().replace(/[,]/g, '');
    }else{
        n = n.toString().split('');
    }

    return addSymbolIfEven(n).join('');
}


function addSymbolIfEven(args){
    let arr=[];
    for(let i=0;i<args.length;i++){
        if(args[i]%2===0 && args[i+1]%2===0){
            arr.push(args[i],'*');
        }else{
            arr.push(args[i]);
        }
    }
    return arr;
}
// END Asterisk it

// Ironman Triathlon
function iTri(dist){
    const TOTAL_DISTANCE = 2.4 + 112 + 26.2;
    if (dist === 0) return 'Starting Line... Good Luck!';
    if (dist <= 2.4) return {'Swim': `${(TOTAL_DISTANCE - dist).toFixed(2)} to go!`};
    if (dist <= 114.4) return {'Bike': `${(TOTAL_DISTANCE - dist).toFixed(2)} to go!`};
    if (dist <= 127) return {'Run': `${(TOTAL_DISTANCE - dist).toFixed(2)} to go!`};
    if (dist < TOTAL_DISTANCE) return {'Run': `Nearly there!`};
    return "You're done! Stop running!";
}
// END Ironman Triathlon

// Counting Valleys
function countingValleys(s) {
    let lv = 0;
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'U') {
            lv += 1;
            if (lv === 0) {
                counter++;
            }
        }
        if (s[i] === 'D') {
            lv -= 1;
        }

    }
    return counter;
}
// END Counting Valleys

// Find the Middle of the Product
function findMiddle(str){
    const matches = str && typeof str === 'string' && str.match(/\d/g);
    if (!matches || matches.length === 0) {
        return -1;
    }
    const numb = matches.reduce((acc, val) => acc * val).toString();

    return +numb.substr(Math.floor(numb.length / 2) - 1 + numb.length % 2, numb.length % 2 === 0 ? 2 : 1);
}
// END Find the Middle of the Product

// Largest 5 digit number in a series
function solution(digits){
    digits = digits.toString();
    let arr=[];
    for(let i=0; i<digits.length-4; i++){
        arr.push(digits.slice(i,5+i));
    }
    arr = arr.map(item => parseInt(item));
    return Math.max(...arr);
}
// END Largest 5 digit number in a series

// Consecutive Ducks
function consecutiveDucks(num) {
    while(num > 2){
        if(num%2!==0){
            return true;
        }
        num = num/2;
    }
    return false
}
// END Consecutive Ducks
