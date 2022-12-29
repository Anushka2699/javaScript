/* filter MAP */
// filter collect all the values and return that as array itself

let nums = [2, 7, 9, 4, 3]

nums.filter(n => n%2===0)
    .map (n => n*2)
    .forEach(n => {
        console.log(n);
    })


//    MAP Reduce

let num = [2, 7, 9, 4, 3]

let result = num.filter(n => n%2===0)
    .map (n => n*2)
    .reduce((a,b) => a+b)

console.log(result);