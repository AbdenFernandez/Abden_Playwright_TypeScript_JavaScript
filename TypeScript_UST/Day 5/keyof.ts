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
    name: "Abden Antony Fernandez",
    age: 23,
    gender: "male",
};

const dodge: car = {
    name: "Dodge",
    price: 500000,
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}


console.log(getProperty(person, "name")); 
console.log(getProperty(dodge, "price")); 