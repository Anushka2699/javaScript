/* forEach  prints individually line by line*/
// Applicable only for multiple values

//forEach()

let nums = [6, 9, 5, 56, 42]

nums.forEach((n) => {       // callback function
    console.log(n);
})

/*=======================================*/
nums.forEach((n,i,nums) => {
    console.log(n, i, nums);
})