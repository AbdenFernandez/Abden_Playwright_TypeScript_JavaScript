var username = "Aaryan";
var products = [
    { id: 1, name: "Pen", price: 20 },
    { id: 2, name: "Notebook", price: 50 },
    { id: 3, name: "Bag", price: 300 },
];
function getAffordableProducts(maxPrice) {
    return products.filter(function (p) { return p.price <= maxPrice; });
}
getAffordableProducts(100).forEach(function (p) {
    return console.log("ID: ".concat(p.id, ", Name: ").concat(p.name, ", Price: $").concat(p.price));
});
