export default function speak() {
    return "bark";
}

//mathUtils.ts(a separate file)
export function add(a: number, b: number): number {
    return a + b;
}
export const PI = 3.14;


//app.ts
import { add, PI } from './mathUtils';
let result = add(10, 5);
console.log(`Result: ${result}`);
console.log(`Value of PI: ${PI}`);