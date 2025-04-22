"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_export_1 = require("./1_export");
console.log((0, _1_export_1.multiply)(4, 5));
var _1_export_2 = require("./1_export");
console.log((0, _1_export_2.getHomeDetails)("Abden", 25));
var _1_export_3 = require("./1_export");
console.log((0, _1_export_3.getCarDetails)("BMW", 50000));
// check a number is prime or not
var _1_export_4 = require("./1_export");
console.log((0, _1_export_4.isPrime)(7));
console.log((0, _1_export_4.isPrime)(10));
//Promise to fetch data from an API
var _1_export_5 = require("./1_export");
(0, _1_export_5.getFacts)("https://cataas.com/cat?width=200;height=200;json=true").then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.error("Error fetching facts:", error);
});
