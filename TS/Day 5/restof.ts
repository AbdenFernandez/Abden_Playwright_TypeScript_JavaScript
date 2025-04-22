type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Pen", price: 20 },
  { id: 2, name: "Notebook", price: 50 },
  { id: 3, name: "Bag", price: 300 },
];

function sumof(...numbers: Product[]): number {
  return numbers.reduce((total, num) => total + num.price, 0); 
}

const totalPrice = sumof(...products);
console.log(`Total Price of all products: $${totalPrice}`);


function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0); // take 2 param data, accept
 
}
const res = sum(1,2,3);
console.log(res);

/* function Logger(constructor: Function) {
  console.log("Class created:", constructor.name);
}

@Logger
class Product {
  constructor(public name: string, public price: number) {}
}

const p1 = new Product("Book", 100);
 */

/* let total = 0;
for(let num of numbers) {
    total += num;
}
return total;
 */


