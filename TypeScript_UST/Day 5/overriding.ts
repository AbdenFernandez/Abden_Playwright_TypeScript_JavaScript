class Animal {
    speak(): string {
        return "The animal makes a sound.";
    }
}

class Cat extends Animal {
    speak(): string {
        return "Meow!";
    }
}

let genericAnimal = new Animal();
let kitty = new Cat();

console.log(genericAnimal.speak()); 
console.log(kitty.speak());         


class dog extends Animal{
    speak(): string {
        return super.speak() + " Woof!"; // Calls the parent class's speak method
    }
}

let trex = new dog();
console.log(trex.speak());