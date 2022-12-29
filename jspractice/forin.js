// for in loop

let alien = {
    name : 'anu',   //
    tech : 'js',    // Keys of alien
    laptop : {      //
        cpu : 'i5',
        ram : '8gb',
        brand : 'HP'
    }
}

for(let key in alien)
{
    console.log(key, alien[key]);
}

/* print key and value of laptop

for(let key in alien.laptop)
{
    console.log(key, alien.laptop[key]);
}
*/