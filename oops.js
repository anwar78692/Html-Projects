// super
//  constructr
// extends  

class Car {
    // in javascript constructor is same as constructor name
    constructor(name, mileage, color) {
        this.name = name;
        this.mileage = mileage;
        this.color = color;


    }
}

let bmw;
bmw = new Car("bmw", "9", "Red");
console.log(bmw);

let merceded = new Car("merc", "8", "black");
console.log(merceded);

class Automatic extends Car {
    constructor(turbo, automatic) {
        this.turbo = turbo;
        this.automatic = automatic;

    }
}