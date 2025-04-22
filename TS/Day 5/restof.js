var username = "Aaryan";
var products = [
    { id: 1, name: "Pen", price: 20 },
    { id: 2, name: "Notebook", price: 50 },
    { id: 3, name: "Bag", price: 300 },
];
function sumof() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num.price; }, 0);
}
var totalPrice = sumof.apply(void 0, products);
console.log("Total Price of all products: $".concat(totalPrice));
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0); // take 2 param data, accept
}
var res = sum(1, 2, 3);
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
