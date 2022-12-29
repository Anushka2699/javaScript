/*      Recursion
A function calling itself */

// let num = 1;
// function show(){
//     console.log("hi",num);
//     num++;

//     if(num<=10350)
//     show();
// }

// show();

//-------------------------------------
/*        Factorial          */
//-------------------------------------

/* n! = n * (n-1) * (n-2) * (n-3) *.....* (n-n)
    5! = 5 * 4 * 3 * 2 * 1

    n! = n * (n-1)! */

    function fact(n){

        if(n==0){
            return 1
        }else{
            return n * fact(n-1)
        }
    }

    let num = 5
    let result = fact(num)

    console.log(result);