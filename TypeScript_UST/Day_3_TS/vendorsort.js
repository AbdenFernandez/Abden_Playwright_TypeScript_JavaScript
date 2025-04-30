var myname = "Aaryan"; // explicitly provide myname the data type of string
var vendors = [
    { id: 3, name: "Naveen", lname: "Kumar", productName: "Watch", price: 600 },
    { id: 1, name: "Vishal", productName: "Airpods", price: 750 },
    { id: 2, name: "Ranjith", lname: "Singh", productName: "Tv", price: 800 },
];
function sortVendors() {
    return vendors.sort(function (v1, v2) { return v1.id > v2.id ? -1 : 1; });
}
sortVendors().forEach(function (e) {
    return console.log("ID: ".concat(e.id, ", Name: ").concat(e.lname != undefined ? e.name + " " + e.lname : e.name, ", Product: ").concat(e.productName, ", Price: ").concat(e.price));
});
