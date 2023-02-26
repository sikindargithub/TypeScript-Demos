export var message = "Hi sikindar";
export let greet = (): void => {
  console.log(`Great day`);
};

let checker = () => {
  console.log(`Don't export this`);
  console.log(`This is like a private function`);
};
export class Product {
  constructor(public itemName: string, public price: number) {}

  getInfo = (): void => {
    console.log(`name :${this.itemName},price:${this.price}`);
  };
}
