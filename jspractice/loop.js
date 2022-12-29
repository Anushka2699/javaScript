// // While loop
// // WL checks for condition then execute the block
// // innitialize, condition, increment

let i = 1;

while (i<=5)
{
    console.log("hi",i);
    i++
}

console.log(i);

// /* Output
// hi 1
// hi 2
// hi 3
// hi 4
// hi 5
// 6   */

// /* ----2---- */

let j = 5;

while (j>=0)
{
    console.log("hi",j);
    j--;
}

// /* Output
// hi 5
// hi 4
// hi 3
// hi 2
// hi 1
// hi 0 */

// /*----DO while loop----*/
// // execute block and then checks condition

let k = 1

do{
    console.log("hi",k);
    k++
}
while(k<=5)

// /* Output
// hi 1
// hi 2
// hi 3
// hi 4
// hi 5 */


/* for loop */

for (i=1; i<=5; i++)
{
    console.log("hi",i);
}

/* Output
hi 1
hi 2
hi 3
hi 4
hi 5 */

/* nested for loop */

for (i=1; i<=2; i++)
{
    console.log("hi",i);

    for (j=1; j<=5; j++){
        console.log("hello");
    }
}

/* Output 
hi 1
hello
hello
hello
hello
hello
hi 2
hello
hello
hello
hello
hello
*/