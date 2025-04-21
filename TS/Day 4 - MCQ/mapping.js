var username = "Aaryan";
var products = [
    { id: 1, name: "Pen", price: 20 },
    { id: 2, name: "Notebook", price: 50 },
    { id: 3, name: "Bag", price: 300 },
];
// Map to get only names
var productNames = products.map(function (p) { return p.name; });
console.log("Product Names:", productNames);
