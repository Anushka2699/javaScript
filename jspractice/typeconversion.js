class Vehicle {
    constructor(name) {
        this.name = name;
    }
    start(){
        console.log(`${this.name} vehical started`);
    }
}

class Car extends Vehicle {
    start() {
        console.log(`${this.name} Car started`);
        super.start();
    }
}

const car = new Car("BMW");
console.log(car.start());