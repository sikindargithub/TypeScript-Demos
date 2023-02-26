class Vehicle {
  constructor(
    public model: string,
    public brand: string,
    public price: number
  ) {}

  getBrand = (): string => {
    return `Brand :${this.brand}`;
  };
}

class Accessorries {
  constructor(public accName: string, public type: string) {}

  getAcc = (): void => {
    console.log(`Accessory name :${this.accName}`);
  };
}
// extends Vehicle,Accessories
// all the methods of class becomes abstract
// getBrand,getAcc,getMileage
interface VDetails extends Vehicle, Accessorries {
  getMileage: () => void;
}

class Car implements VDetails {
  constructor(
    public model: string,
    public brand: string,
    public price: number,
    public accName: string,
    public type: string
  ) {}

  getBrand = (): string => {
    return `Brand :${this.brand}`;
  };
  getAcc = (): void => {
    console.log(`Accessory name :${this.accName}`);
  };
  getMileage = (): void => {
    console.log(`mileage`);
  };
}

let details: VDetails = new Car(
  "M123",
  "Maruthi",
  500000,
  "Music Sytem",
  "Entertainment"
);
console.log(details.getBrand());
details.getAcc();
details.getMileage();
