/*
function btnclick(){
    alert('alert from js');
}
*/
let a = 5;
let b = 6;
const c = 45;
/*c = 5;  // const c = 5; /Thi is a final value/ This will throw an error because 'c' is a constant and cannot be reassigned
console.log("Sum of " + a + " And " + b + " is " + (a+b));
console.log("Substraction is ", a-b);
console.log(`product of ${a} & ${b} is ${a*b}`);
console.log(`Division of ${a} & ${b} is ${a/b}`);
console.log(`Modulus of ${a} & ${b} is ${a%b}`);
*/
let val = true;
// console.log(val);

let arr = ["Aaryan", "abden", 77, 99, true, 45, "abc"];
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
}

for (const name in arr) {
    //console.log(arr[name]);
}

for (const name of arr) {
    //console.log(name);
}

arr.forEach(
    function (e) {
        console.log(e);
    }
);

arr.forEach(
    (e) => {
        console.log(e);
    }
)

arr.push("new value");
console.log(arr);
// arr.pop();
// console.log(arr);


// arr.filter((e) => e.toString().startsWith('A'))
//     .forEach((e) => console.log(e)
//     );


// arr.filter((e) => Number.isInteger(e))
//     .map((e) => e * 2)
//     .sort()
//     .forEach((e) => console.log(e));

// let obj = {
//     name: "Aaryan",
//     age: 20,
//     role: "Student",
//     exp: 9,
//     lang: ["Java", "Python", "C", "Dart", "Node"],
// }

//lang --> add playwright  --> print
// console.log([...obj.lang, "playwright"]);
// console.log(obj);


function add(a, b = 10) {
    console.log(a + b);

}

//add(5, 20);
add(5);

function rec(a) {
    if (a == 10) {
        return;
    }
    rec(a + 1)
}

rec(1);
add(5, 20);

function reverse(a){
    console.log(a.split("").reverse().join(""));
}

reverse("Aaryan");

function reverseNumber(num) {
    const reversed = parseInt(num.toString().split("").reverse().join(""));
    console.log(reversed);
}

reverseNumber(12345);

function getPrimes(start, end) {
    for (let num = start; num <= end; num++) {
        let isPrime = true;
        if (num < 2) isPrime = false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
        }
    }
} 

getPrimes(1, 20);

//HTML page --> username, pass --> validate --> login success/failed
