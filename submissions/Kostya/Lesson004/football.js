let matches = ['0:3', '2:2', '2:1', '4:3', '3:2', '2:0', '2:1', '4:3', '3:0', '2:0'];

let points = function(y)
{
    let point = 0;
for (let i = 0; i < y.length; i++)
{
    let x = y[i];
if (x[2]<x[0])
point += 3;
    if (x[2]===x[0])
        point += 1;
}
    return point
}
console.log(points(matches));