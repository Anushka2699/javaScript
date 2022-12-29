
let greet = function()
{
    console.log("hello world");
    return 1
}

console.log(greet());

// /* Arrow function */

let greet = (user) =>{
    console.log("hello "+user);
    return 1
}

console.log(greet('anu'));




// /* ----------------------------------- */

let add = (num1,num2) =>{
    
    return num1+num2
}

let result = add(5,6) 
console.log(result)



/* if the statement is one line no need of {} and return */

let add = (num1,num2) => num1+num2

let result = add(5,6) 
console.log(result)

let add = (num1,num2) => num1+num2
    

let result = add(5,-6) 
console.log(result)


/* number should be added if the number is positive if it is negative it should not */

const add = (num1, num2) => {

    if(num1>0 && num2>0){
    return num1 + num2
    }
    else{
        return "-ve number"
    }
}
let result = add(2,3)
console.log(result);
