var username = "Aaryan";
var products = [
    { id: 1, name: "Pen", price: 20 },
    { id: 2, name: "Notebook", price: 50 },
    { id: 3, name: "Bag", price: 300 },
];
var allUnder100 = products.every(function (p) { return p.price < 100; });
var anyUnder30 = products.some(function (p) { return p.price < 30; });
console.log("Are all products under $100? ".concat(allUnder100 ? "Yes" : "No"));
console.log("Is there any product under $30? ".concat(anyUnder30 ? "Yes" : "No"));
