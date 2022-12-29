
let user = 'anu' // "user" Global variable

function greet(u)
{
    console.log(user);
    return `hello ${u}` // 'u' local variable
}

let str = greet(user)
console.log(str);


/* -------------Default value-------------- */
// default value will be applicable when value is not assigned


function add(num1,num2,num3=1)
{
    console.log(num1,num2,num3);
    return num1+num2+num3
}

let result = add(5,6) // 1 will be assigned in the 3rd value
console.log(result)
