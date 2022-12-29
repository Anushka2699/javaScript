let e = ''
let f = false

console.log(e, typeof e)
console.log(f, typeof f)

/*type conversion, */

let x = String(4)
console.log(x, typeof x)

x = Number("sdf")
console.log(x, typeof x)

x = parseFloat("sdf")
console.log(x, typeof x)

console.log(Boolean(4))



/*coercion*/
x = 3
console.log(x, typeof x)

x = x + 3
console.log(x, typeof x)

x = x + "e"
console.log(x, typeof x)

x = "" - 4
console.log(x, typeof x)

x = 1+2+"3"
console.log(x, typeof x)

x = !x
console.log(x, typeof x)