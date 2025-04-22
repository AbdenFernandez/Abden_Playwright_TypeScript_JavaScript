/* interface meow {
    speak: {
        (s: string): string;
        (n: number): string;
    }
}
 */
class Meow {
    speak(s: string): string;
    speak(n: number): string;
    speak(b: boolean): string;
    speak(arg: any): any {
        if (typeof arg === 'number') {
            return `Meow number ${arg}`;
        }
        if (typeof arg === 'string') {
            return `Meow string ${arg}`;
        }
        if (typeof arg === 'boolean') {
            return `Meow boolean ${arg}`;
        }
    }
}

let m1 = new Meow();

console.log(m1.speak(5)); 
console.log(m1.speak("hello"));
console.log(m1.speak(true)); 