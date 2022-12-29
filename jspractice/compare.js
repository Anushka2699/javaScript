/* Methods function inside object [latop]*/
/* this keyword 
    comparing laptop andd laptop2
*/

let laptop = {
    cpu: 'i7',
    ram:16,
    brand:'hp',

    compare : function(other){
        if(this.cpu >= other.cpu){
            if(this.ram >= other.ram){
             console.log(this);
            }else{
                console.log(other);
            }
        }else{
            console.log(other);
        }
    },

    get: function(){
        console.log(this.cpu); // this is current object
    }
}

let laptop2 = {
    cpu: 'i7',
    ram: 2,
    brand:'dell',


    get: function(){
        console.log(this.cpu); // this is current object
    }
}

laptop.compare(laptop2)