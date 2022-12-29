/* destructure */
let nums = [5,7,2,4]

let [a,b,c,d] = nums; 

console.log(d);

/*-----------======================================*/

let num = [5,7,2,4]

let [a2,b2,,d2] = num; // even [a,b,,d] works it skips the number

console.log(d2);

/*======================================================*/
/*------------------------------------------------------*/
// values for string using "Method split()""

let words = "my name is anu".split(' ')

let [e,f,g,h] = words;

console.log(f, h);

/*********************************************************/

let numb = "my name is anushka patel actor".split(' ')

let [a3,b3,,...d3] = numb; // "..." rest of the elements

console.log(d3);


/*--------------------------------------------------*/
// swap two number

let a1 = 5;
let b1 = 6;

[a1, b1] = [b1 ,a1] //swap

console.log(a1,b1);

