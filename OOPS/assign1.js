class Vehicle {
    constructor(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.print = () => {
            console.log(`name : ${this.name},brand : ${this.brand},price : ${this.price} `);
        };
    }
}
class Bike extends Vehicle {
    constructor(name, brand, price, engineCC) {
        super(name, brand, price);
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.engineCC = engineCC;
        this.showMileage = (engineCC) => {
            if (engineCC <= 120)
                return `milegae is 70 km`;
            else if (engineCC <= 150 && engineCC > 120)
                return `mileage is 55 km`;
            else if (engineCC <= 170 && engineCC > 150)
                return `mileage is 40 km`;
            else
                return `invalid engineCC`;
        };
    }
}
class Car extends Vehicle {
    constructor(name, brand, price, fuelType) {
        super(name, brand, price);
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.fuelType = fuelType;
        this.showAccessories = (...accessories) => {
            accessories.forEach((accessory) => console.log(`${accessory}`));
        };
    }
}
var bike = new Bike("Shine", "SP125", 95000, 130);
console.log(bike.showMileage(130));
var car = new Car("Maruthi", "MT234", 540000, "Diesel");
car.showAccessories("AC", "music system");
