type Product = {
  id: number;
  name: string;
  price: number;
};

let username: string = "Abden";

const products: Product[] = [
  { id: 1, name: "Pen", price: 20 },
  { id: 2, name: "Notebook", price: 50 },
  { id: 3, name: "Bag", price: 300 },
];

const totalPrice = products.reduce((sum, p) => sum + p.price, 0);

console.log(`Total Price of all products: $${totalPrice}`);




/* function Logger(constructor: Function) {
  console.log("Class created:", constructor.name);
}

@Logger
class Product {
  constructor(public name: string, public price: number) {}
}

const p1 = new Product("Book", 100);
 */