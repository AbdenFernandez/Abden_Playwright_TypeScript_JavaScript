/* type obj = {name: string, age: number};
type o = keyof obj; // "name" | "age"

let n: o = "name"; // valid */
var person = {
    name: "Abden Antony Fernandez",
    age: 23,
    gender: "male",
};
var dodge = {
    name: "Dodge",
    price: 500000,
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(person, "name"));
console.log(getProperty(dodge, "price"));
