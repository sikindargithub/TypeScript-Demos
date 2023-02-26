export interface ProductDetails {
  itemName: string;
  price: number;
  cartDetails: (quantity: number) => void;
}

export class Gadgets implements ProductDetails {
  constructor(public itemName: string, public price: number) {}
  cartDetails = (quantity: number): void => {
    console.log(`Cart Details`);
    console.log(`item name :${this.itemName}`);
    console.log(`total cost:${this.price * quantity}`);
  };
}

export let appliances = {
  itemName: "Pen",
  price: 10,
  cartDetails: function (quantity: number): void {
    console.log(`Cart Details`);
    console.log(`item name :${this.itemName}`);
    console.log(`total cost:${this.price * quantity}`);
  },
};

export let showBill = (details: ProductDetails, quantity: number): void => {
  details.cartDetails(quantity);
};
