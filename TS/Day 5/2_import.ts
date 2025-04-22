import { multiply as mul } from "./1_export";
console.log(mul(4, 5));
import { getHomeDetails as details } from "./1_export";
console.log(details("Abden", 25));
import { getCarDetails as car } from "./1_export";
console.log(car("BMW", 50000));

// check a number is prime or not

import { isPrime as prime } from "./1_export";
console.log(prime(7));
console.log(prime(10));

//Promise to fetch data from an API
import { getFacts } from "./1_export";

getFacts("https://cataas.com/cat?width=200;height=200;json=true").then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("Error fetching facts:", error);
});

