/* interface meow {
    speak: {
        (s: string): string;
        (n: number): string;
    }
}
 */
var Meow = /** @class */ (function () {
    function Meow() {
    }
    Meow.prototype.speak = function (arg) {
        if (typeof arg === 'number') {
            return "Meow ".concat(arg);
        }
        if (typeof arg === 'string') {
            return "Meow ".concat(arg);
        }
        if (typeof arg === 'boolean') {
            return "Meow boolean ".concat(arg);
        }
    };
    return Meow;
}());
var m1 = new Meow();
console.log(m1.speak(5));
console.log(m1.speak("hello"));
console.log(m1.speak(true));
