class Employee {
  constructor(public name: string, public city: string) {}
  printDetails = () => {
    console.log(`Employee name :${this.name}`);
    console.log(`city : ${this.city}`);
  };
}

class Manager extends Employee {
  constructor(public name: string, public city: string, public salary: number) {
    super(name, city);
  }

  calBonus = (amount: number) => {
    console.log(`Bonus : ${this.salary + amount}`);
  };
}
