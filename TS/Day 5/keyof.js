/* type obj = {name: string, age: number};
type o = keyof obj; // "name" | "age"

let n: o = "name"; // valid */
var person = {
    name: "John",
    age: 30,
    gender: "male",
};
var bmw = {
    name: "BMW",
    price: 50000,
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(person, "name")); // John
console.log(getProperty(bmw, "price")); // 50000
