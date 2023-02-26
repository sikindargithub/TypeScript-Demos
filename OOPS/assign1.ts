class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public price: number
  ) {}

  print = () => {
    console.log(
      `name : ${this.name},brand : ${this.brand},price : ${this.price} `
    );
  };
}

class Bike extends Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public engineCC: number
  ) {
    super(name, brand, price);
  }
  showMileage = (engineCC: number): string => {
    if (engineCC <= 120) return `milegae is 70 km`;
    else if (engineCC <= 150 && engineCC > 120) return `mileage is 55 km`;
    else if (engineCC <= 170 && engineCC > 150) return `mileage is 40 km`;
    else return `invalid engineCC`;
  };
}

class Car extends Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public fuelType: string
  ) {
    super(name, brand, price);
  }

  showAccessories = (...accessories: string[]) => {
    accessories.forEach((accessory) => console.log(`${accessory}`));
  };
}

var bike = new Bike("Shine", "SP125", 95000, 130);
console.log(bike.showMileage(130));

var car = new Car("Maruthi", "MT234", 540000, "Diesel");
car.showAccessories("AC", "music system");
