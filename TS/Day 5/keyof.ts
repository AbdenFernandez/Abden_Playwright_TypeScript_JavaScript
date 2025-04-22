/* type obj = {name: string, age: number};
type o = keyof obj; // "name" | "age"

let n: o = "name"; // valid */

interface Person{
    name: string;
    age: number;
    gender: string;
}
interface car{
    name: string;
    price: number;
}
const person: Person = {
    name: "John",
    age: 30,
    gender: "male",
};

const bmw: car = {
    name: "BMW",
    price: 50000,
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(getProperty(person, "name")); // John
console.log(getProperty(bmw, "price")); // 50000