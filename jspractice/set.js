/* Set    has unique values, order in JS, doesnt has index value */

let nums = new Set()

nums.add(3);
nums.add(2);
nums.add(3);
nums.add("anu");
nums.add("pava");
nums.add("nan");

for(let n of nums){
    console.log(n);}

//////////////////////////////////////////////////

nums.forEach(value => {
    console.log(value);
})

// check the number weather it is their or not
// "has()"
console.log(nums.has(1));