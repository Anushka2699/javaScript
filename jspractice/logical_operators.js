/*Logical Operator*/

let x=7, y=8, z=9

let result = x < y && y > z
console.log(result, "&& and operation 7<8 && 8>9")

let result1 = x < y && y < z
console.log(result1, "&& and operation 7<8 && 8<9")

let resul = x > y && y > z
console.log(resul, "&& and operation 7>8 && 8>9")

let result2 = x < y || y < z
console.log(result2, "|| or operation 7<8 || 8<9")

let result3 = x < y || y > z
console.log(result3, "|| or operation 7<8 || 8>9")

let resu = x > y || y > z
console.log(resu, "|| or operation 7>8 || 8>9")

/* Not */

let res = x < y || y > z
n = !res
console.log(res, n, " NOt 7<8 || 8>9")