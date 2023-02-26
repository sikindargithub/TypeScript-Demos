import { ProductDetails, Gadgets, appliances, showBill } from "./productinter";

var details: ProductDetails = new Gadgets("Pencil", 10);
showBill(details, 4);
showBill(appliances, 3);
