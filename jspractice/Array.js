// /* Arrays */

// let values = [2,4,3,5];

// values.push(8) //adding to array

// console.log(values[3]);

// /*-----------------------------------------------*/

// let names = ['navas', 'bdhdv', 'bydvcy']

// names[3]= 'anu' //adding to array

// console.log(names);

// /*--------------------------------------------*/
// //array can be of diff types of data numbrer, object, function

// let data = ['anu',9 ,{tech:'js'},
//             function(){console.log("hiii");}]

// console.log(data);

// data[3]();


/*===================================================*/
//Array methods "Push" "pop" "shift"/"unshift" "splice"
// pop from the right side // shift/unshift from left
// splice break into tow


let data = [2, 4, 5, 7]

console.log(data.pop()+"pop");
console.log(data.pop()+"pop");
console.log(data.push(8));

console.log(data);


/* splice
    (data.splice(2,1)
        index value, no of values want to remove

    [ 2, 4, 8 ]

    [ 8 ]
    [ 2, 4 ]

*/

let data1 = [4,7,3,5,7,4]

console.log(data1.splice(2,1));

console.log(data);

//---------------------------------------------

let data2 = [4,6,2,7]

console.log(data2.splice(1,1,3,4));

console.log(data2);
