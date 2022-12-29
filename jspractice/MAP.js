/* MAP */
// key : value pair

let map = new Map();

map.set("anu","js" )
map.set("pava","pharma")
map.set("anu","phython");

console.log(map.keys());
console.log(map.has("anu"));
console.log(map.get("anu"));

for(let [k,v] of map){
    console.log(k, ":", v);
}

map.forEach((v,k) => {
    console.log(k, ":", v);
})