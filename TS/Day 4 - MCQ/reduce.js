var username = "Aaryan";
var products = [
    { id: 1, name: "Pen", price: 20 },
    { id: 2, name: "Notebook", price: 50 },
    { id: 3, name: "Bag", price: 300 },
];
var totalPrice = products.reduce(function (sum, p) { return sum + p.price; }, 0);
console.log("Total Price of all products: $".concat(totalPrice));
