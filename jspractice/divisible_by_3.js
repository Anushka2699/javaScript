// // /* divisible by 3 1-100 */
// //when u know starting point and ending point for loop is used

for (i=1; i<=100; i++)
{
    if (i%3===0) {
        console.log(i);
    }
}



// /*print this in reverse order single digits*/
// // while is used when u dont know starting point and ending point

let num = 123456

while(num>0){
    console.log(num%10)
    num = parseInt(num/10)
    console.log(num);
}


// revers the number
let num = 123456
let num2 = ""

while (num>0) {
    remainder = String(num % 10)
    num =parseInt(num / 10)
    num2 = num2 + remainder
}
console.log(num2)/

/* Output
654321
*/