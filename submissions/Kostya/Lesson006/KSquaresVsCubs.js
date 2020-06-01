let arr1 = [2, 2, 3];
let arr2 = [2, 2];
const KSquaresVsCubs = (ar1, ar2) => {
    return (ar1.reduce((sum, current) => sum + Math.pow(current, 2), 0)) > (ar2.reduce((sum, current) => sum + Math.pow(current, 3), 0));
};
console.log(KSquaresVsCubs(arr1, arr2));
