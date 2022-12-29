/* constructor function*/
// 1st letter CAPS

function Alien(name, tech)
{
    this.name = name
    this.tech = tech

    this.work = function(){
        console.log("solving bugs from 3hrs");
    }

    return 1
}

let alien = new Alien('anu', 'css')
let alien1 = new Alien('pav', 'pharm')

alien.tech = 'java'

console.log(alien);
alien.work();