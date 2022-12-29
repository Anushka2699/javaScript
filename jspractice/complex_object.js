/* complex object */ 
// having an object inside a object

let alien = {
    name : 'anu',
    tech : 'js',
    laptop : {
        cpu : 'i5',
        ram : '8gb',
        brand : 'HP'
    }
}

delete alien.laptop // delete is a key word

console.log(alien);

// ? is used when the property is not exist to print undefined rather than error
// console.log(alien.laptop1?.brand1?.length);

