// for of loop
// Arrays for of is used

let nums = []

nums[0] = 5
nums[99] = 99

// for of loop
for (let n of nums){
    console.log(n);
}

// for in loop
for (let key in nums){
    console.log(nums[key]);
}
