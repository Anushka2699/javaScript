// Mon - 7am
// tue - thurs - 4am
// fri - 9am
// sat - sun - 8am

let day = "monday"

switch(day){
    case "monday" :
        console.log("7am"); 
        break
    case "tuesday" :
    case "wednesday":
    case "thursday" :
        console.log("4am");
        break
    case "friday" :
        console.log("9am");
        break
    case "saturday" :
    case "sunday" :
        console.log("8am");
        break
}
console.log("bye");