var username = "Aaryan";
var products = [
    { id: 1, name: "Pen", price: 20 },
    { id: 2, name: "Notebook", price: 50 },
    { id: 3, name: "Bag", price: 300 },
];
function findProductByName(productName) {
    return products.find(function (p) { return p.name === productName; });
}
var result = findProductByName("Bag");
if (result) {
    console.log("Found: ".concat(result.name, ", Price: $").concat(result.price));
}
else {
    console.log("Product not found.");
}
